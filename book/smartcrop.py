from PIL import Image, ImageOps, ImageFilter
import numpy as np, os

def load(p):
    return ImageOps.exif_transpose(Image.open(p)).convert('RGB')

def energy_profile(im, axis):
    """Profil d'énergie de contours par ligne (axis=0) ou par colonne (axis=1)."""
    g = im.convert('L').filter(ImageFilter.FIND_EDGES)
    a = np.asarray(g, dtype=np.float32)
    return a.sum(axis=1 if axis == 0 else 0)

def smart_crop(im, ratio, head_bias=0.42):
    """Recadre au rapport voulu en gardant la zone de détail, avec un peu d'air au-dessus.
    head_bias : position visée du centre d'énergie dans la fenêtre (0.5 = centré,
    <0.5 = le sujet est placé plus haut, ce qui laisse de l'air sous la tête)."""
    w, h = im.size
    target_h = w / ratio
    if target_h <= h:                       # on rogne en hauteur
        win = int(round(target_h))
        prof = energy_profile(im, 0)
        idx = np.arange(h)
        c = float((prof * idx).sum() / max(prof.sum(), 1e-6))
        top = int(round(c - win * head_bias))
        top = max(0, min(h - win, top))
        return im.crop((0, top, w, top + win))
    win = int(round(h * ratio))             # on rogne en largeur
    prof = energy_profile(im, 1)
    idx = np.arange(w)
    c = float((prof * idx).sum() / max(prof.sum(), 1e-6))
    left = int(round(c - win * 0.5))
    left = max(0, min(w - win, left))
    return im.crop((left, 0, left + win, h))

def save(im, path, long_edge, q):
    im = im.copy(); im.thumbnail((long_edge, long_edge), Image.LANCZOS)
    im.save(path, 'JPEG', quality=q, optimize=True, progressive=True)
    return os.path.getsize(path)
