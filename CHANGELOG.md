# Changelog

## 1.0.0 (2026-10-16)

First public release of femeIA.Co, the rose edition of OMNIA 1.0.0 (Klaus Schumacher, MD): the same conversion
engine and validation, renamed and restyled (Fraunces display type, rose and plum colour scheme, the ♀ reticle mark).

- NIfTI → DICOM: classic CT Image and MR Image series (3D, 4D, DWI with b-values and gradient directions in the
  patient frame), DICOM SEG from label maps referencing the converted image series, exact 16-bit encoding with
  explicit quantisation as an option, metadata cascade (reference DICOM, BIDS sidecar, CSV, defaults).
- DICOM → NIfTI: dcm2niix (WebAssembly) with BIDS naming, filters for localizers and secondary reconstructions,
  lossless split of irregular slice spacing, exact sheared geometry for gantry tilt, independent voxel check of
  every uncompressed image (any slice axis), mosaic support (Siemens, United Imaging).
- Archives: ZIP (including ZIP64), RAR4/RAR5, 7z, TAR, nested archives, DICOMDIR, gzip-compressed DICOM files.
- De-identification: DICOM PS3.15 Basic Profile, consistent pseudonyms across a batch, date removal or shift,
  descriptor cleaning against every identity found in an exam, sidecar cleaning, confidential pseudonym map.
- Face removal for head CT (tangent cutting plane, before/after rendering).
- Batch interface for up to 100 exams with per-exam progress, reports (CSV, JSON), SHA-256 checksums,
  orthogonal-plane visual checks, PT/EN, light and dark themes.
- Netlify deployment with an optional email access gate.
