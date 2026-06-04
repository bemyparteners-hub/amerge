/**
 * AluGeom — calculs géométriques 2D pour vues en coupe
 * Utilisé par renderCoupe() dans nouvelle-page.html
 */
const AluGeom = (() => {

  /**
   * Calcule la polyligne 2D d'un profilé à partir de ses segments et plis.
   * @param {Array<{length:number, label:string}>} segments
   * @param {Array<{angle:number}>} bends  angle en degrés, négatif = pli vers le bas
   * @returns {Array<{x:number, y:number}>}  N+1 points pour N segments
   */
  function computePolyline(segments, bends) {
    let dir = 0;
    const pts = [{x: 0, y: 0}];
    segments.forEach((seg, i) => {
      const rad = dir * Math.PI / 180;
      const p   = pts[pts.length - 1];
      pts.push({
        x: p.x + Math.cos(rad) * seg.length,
        y: p.y + Math.sin(rad) * seg.length
      });
      if (i < bends.length) dir += bends[i].angle;
    });
    return pts;
  }

  /**
   * Bounding-box d'un tableau de points {x,y}.
   * @returns {{minX, minY, maxX, maxY, w, h}}
   */
  function bbox(pts) {
    const xs = pts.map(p => p.x);
    const ys = pts.map(p => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    return {minX, minY, maxX, maxY, w: maxX - minX, h: maxY - minY};
  }

  return {computePolyline, bbox};
})();
