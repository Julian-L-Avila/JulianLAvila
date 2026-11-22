# Academic Research Portfolio

**Julian L. Avila-Martinez**  
*B.Sc. in Physics (Graduation: December 2026) · Universidad Distrital Francisco José de Caldas (Bogotá D.C., Colombia)*  
**ORCID:** [`0009-0002-8630-1922`](https://orcid.org/0009-0002-8630-1922) · **CvLAC (Minciencias):** [`0002012647`](https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0002012647) · **GitHub:** [`@Julian-L-Avila`](https://github.com/Julian-L-Avila)

---

## 1. Undergraduate Thesis (*Trabajo de Grado* — Nominated for *Mención Meritoria*)

### *Foundations of the Dirac Equation: From Relativistic Principles to Clifford Algebras*
- **Institution:** Universidad Distrital Francisco José de Caldas, Facultad de Ciencias Matemáticas y Naturales, Programa Académico de Física
- **Modality:** Research Monograph (Written in English · Defended under *Acta de Sustentación No. 020 de 2026*)
- **Honors:** **Nominated for Meritorious Thesis Mention (*Mención Meritoria*)**
- **Graduation Date:** December 2026 (All academic requirements fulfilled)
- **Thesis Advisor (*Director*):** **Dr. Asdrúbal Moreno-Mosquera** (Tenured Professor & Physics Program Coordinator, UDFJC; Ph.D. in Physics, Universidad de Salamanca, Spain — IUFFyM, `amorenom@udistrital.edu.co`)
- **Direct Files in Repository ([`projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/)):**
  - **Full Thesis Monograph (PDF):** [`foundations-of-the-dirac-equation-thesis.pdf`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/foundations-of-the-dirac-equation-thesis.pdf)
  - **Thesis Defense Slides (PDF):** [`thesis-defense-slides.pdf`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/thesis-defense-slides.pdf)
  - **LaTeX Source & Frontmatter:** [`grad.tex`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/grad.tex), [`abstract.tex`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/abstract.tex), [`notation-and-conventions.tex`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/notation-and-conventions.tex)
  - **Original TikZ Geometric Illustrations:** [`figures/wigner-rotation.pdf`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/figures/wigner-rotation.pdf) ([`.tex`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/figures/wigner-rotation.tex)), [`figures/thomas.pdf`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/figures/thomas.pdf) ([`.tex`](../projects/01-mathematical-and-theoretical-physics/undergraduate-thesis-dirac-clifford/figures/thomas.tex))

#### Scientific Scope & Key Contributions
1. **Genealogy & Critique of Algebraic Formalisms:** Traces the historical divergence of 19th- and 20th-century mathematical physics—from Hamilton's quaternions (1843) and Grassmann's *Ausdehnungslehre* (1844) to Clifford's geometric product $uv = u \rfloor v + u \wedge v$ (1878)—and diagnoses the structural limitations of the Gibbs–Heaviside 3D vector system, coordinate tensor index gymnastics, and uninterpreted complex matrix spinor representations.
2. **Coordinate-Free Construction of Spacetime Algebra $\mathcal{C}\ell_{1,3}(\mathbb{R})$:** Builds real Clifford algebras over general quadratic spaces $(V, g)$, establishing Sylvester's law of inertia, grade involutions, reversion, the Lipschitz/Clifford group $\Gamma(V,g)$, and the double cover $\mathrm{Spin}^+(1,3) \to \mathrm{SO}^+(1,3)$ via even multivector rotors $R\tilde{R}=1$.
3. **First-Principles Linearization of the Klein–Gordon–Fock Operator:** Demonstrates that the factorization of the relativistic mass-shell relation $p^2 = m^2$ is a direct consequence of the geometry of quadratic spaces, yielding the coordinate-free Dirac operator $\nabla = \gamma^\mu \partial_\mu$.
4. **Real Even-Multivector Spinor Fields & Relativistic Hydrodynamics:** Identifies the Dirac spinor as an element of the even subalgebra $\psi \in \mathcal{C}\ell^+_{1,3}$ admitting the canonical Yvon–Takabayashi polar decomposition
   $$\psi(x) = \rho(x)^{1/2} e^{\frac{1}{2}\beta(x) I} R(x),$$
   replacing abstract complex Hilbert-space column vectors with real spacetime rotors, bilinear observables $\{\rho, \beta, J, s, S\}$ constrained by Fierz–Pauli–Kofink identities, electromagnetic $\mathrm{U}(1)$ gauge coupling, the Pauli–Schrödinger non-relativistic limit with Darwin/spin-orbit corrections, and discrete $C, P, T$ transformations.

---

## 2. Chiral Dirac Equation, Fermion Mass Generation & Relativistic Quantum Software

### 2.1 Chiral Dirac Equation & Seesaw Neutrino Mass Generation (Award-Winning CIFI-SEMA 2026 Research)
- **Poster Title:** *Chiral Dirac Equation: Degrees of Freedom and Neutrino's Mass*
- **Manuscript in Preparation:** *Hermiticity and Mass Generation in the Chiral Dirac Equation* (Working paper in preparation)
- **Authors:** **Julian L. Avila-Martinez**, Sebastian Rodriguez-Garcia, Leidy Y. Herrera-Martinez, and Dr. José Alfonso Leyva Rojas (Pontificia Universidad Javeriana)
- **Award:** **Third Best Poster Award (Particle & High-Energy Physics Category)**, Congreso Internacional de Física e Ingeniería — *CIFI-SEMA 2026* (Poster ID `FP6-P3`), Universidad Simón Bolívar, Barranquilla, Colombia (May 2026).
- **Direct Files in Repository ([`projects/01-mathematical-and-theoretical-physics/chiral-dirac-and-neutrino-mass/`](../projects/01-mathematical-and-theoretical-physics/chiral-dirac-and-neutrino-mass/)):**
  - [`cifi-sema-2026-poster.pdf`](../projects/01-mathematical-and-theoretical-physics/chiral-dirac-and-neutrino-mass/cifi-sema-2026-poster.pdf) — Award-winning CIFI-SEMA 2026 poster
  - [`poster.tex`](../projects/01-mathematical-and-theoretical-physics/chiral-dirac-and-neutrino-mass/poster.tex) & [`chiral-references.bib`](../projects/01-mathematical-and-theoretical-physics/chiral-dirac-and-neutrino-mass/chiral-references.bib)

### 2.2 `dirac-solver`: C++17 / `pybind11` / Python Library for the (3+1)D Dirac Equation
- **Co-Authors:** **Julian L. Avila-Martinez**, Sebastian Rodriguez-Garcia, and Camilo Andres Huertas-Archila (Software Registration Pending, 2026)
- **Quarto Published Notebooks:** [`../notebooks/dirac-physics-verification.html`](../notebooks/dirac-physics-verification.html) & [`../notebooks/dirac-1d-and-yukawa.html`](../notebooks/dirac-1d-and-yukawa.html)
- **Direct Files in Repository ([`projects/02-computational-physics-and-software/dirac-equation-solver/`](../projects/02-computational-physics-and-software/dirac-equation-solver/) & [`sta-qed-and-dirac-solver-proposal/`](../projects/02-computational-physics-and-software/sta-qed-and-dirac-solver-proposal/)):**
  - Reproducible verification notebooks: [`physics_verification.ipynb`](../projects/02-computational-physics-and-software/dirac-equation-solver/physics_verification.ipynb), [`dirac_solver_1d_example.ipynb`](../projects/02-computational-physics-and-software/dirac-equation-solver/dirac_solver_1d_example.ipynb), [`yukawa.ipynb`](../projects/02-computational-physics-and-software/dirac-equation-solver/yukawa.ipynb)
  - C++17 core & Python bindings: [`cpp_src/`](../projects/02-computational-physics-and-software/dirac-equation-solver/cpp_src/), [`dirac_solver/`](../projects/02-computational-physics-and-software/dirac-equation-solver/dirac_solver/), [`tests/test_integration.py`](../projects/02-computational-physics-and-software/dirac-equation-solver/tests/test_integration.py)
  - Software engineering documentation: [`dirac-solver-doxygen-refman.pdf`](../projects/02-computational-physics-and-software/dirac-equation-solver/dirac-solver-doxygen-refman.pdf), [`design-pattern.md`](../projects/02-computational-physics-and-software/dirac-equation-solver/design-pattern.md), [`requirements-engineering.md`](../projects/02-computational-physics-and-software/dirac-equation-solver/requirements-engineering.md), [`sta-qed-dirac-solver-proposal.pdf`](../projects/02-computational-physics-and-software/sta-qed-and-dirac-solver-proposal/sta-qed-dirac-solver-proposal.pdf)

---

## 3. Relativistic Magnetohydrodynamics (RRMHD) — CUEVA Research Group

### Researcher in Resistive Relativistic Magnetohydrodynamics (2024 – Present)
- **Research Group:** **CUEVA** (*Grupo de Investigación CUEVA*, UDFJC)
- **Advisor:** **Dr. Sergio Miranda Aranguren** (Associate Professor, UDFJC; Ph.D. in Physics, Universitat de València, Spain, `smirandaa@udistrital.edu.co`)
- **Research Contributions:**
  - Derived $3+1$ covariant tensor representations of Resistive Relativistic Magnetohydrodynamics (RRMHD), coupling stress-energy conservation ($\nabla_\mu T^{\mu\nu} = 0$) with Maxwell's equations and the relativistic Ohm's law.
  - Modeled nonlinear hyperbolic systems of conservation laws governing relativistic astrophysical slab jets, Kelvin–Helmholtz/kink instabilities, and resistive current sheets.
  - Implemented numerical simulation and post-processing pipelines in **Fortran 95 and Python** to benchmark relativistic jet collimation regimes and resistive magnetic reconnection instabilities.
- **Conference Poster Presentations & Awards in CUEVA:**
  1. **XXX Congreso Nacional de Física (Oct 2025, Manizales, Colombia):** *"Estudio Numérico de Jets Relativistas en el Marco de la RRMHD"* (Poster).
  2. **Colombian Congress of Astronomy and Astrophysics — CoCoA 2024 (Nov 2024, Bucaramanga, Colombia):** *"Slab Jet: Numerical Study Using the RRMHD Framework"* (Poster).
  3. **I Semana de las Ciencias, UDFJC (Nov 2023, Bogotá, Colombia) — Award Winner:** *"Asymmetric Capacitor – Lifter"* (Co-authors: A. Pineda-Morales, J. Ríos-Maecha; **Winner of the Best Poster Award in the Research Seedbed Category / *Modalidad Semillero de Investigación***).

---

## 4. Topological Phases of Matter, Semiclassical JWKB & Quantum Foundations

1. **Classification of Topological Phases via Clifford Algebras & K-Theory (ISQSE 2025):** [`survey-topological-phases-iqse2025.pdf`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/survey-topological-phases-iqse2025.pdf) & [`references-iqse.bib`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/references-iqse.bib)
2. **The Eikonal as a Bridge to the Schrödinger Equation (XXX CNF 2025):** [`eikonal-jwkb-xxxcnf2025.pdf`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/eikonal-jwkb-xxxcnf2025.pdf) & [`references-xxxcnf.bib`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/references-xxxcnf.bib)
3. **The Vector Algebra War (III Semana de la Ciencia 2026):** [`guerra-vectorial-2026.pdf`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/guerra-vectorial-2026.pdf) & [`references-iiiscienceweek.bib`](../projects/01-mathematical-and-theoretical-physics/topological-phases-and-jwkb/references-iiiscienceweek.bib)
4. **Quantum Mechanics Monographs & AI-Benchmark Reference Derivations ([`quantum-mechanics-foundations/`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/)):**
   - [`csco-4d-hilbert-space.pdf`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/csco-4d-hilbert-space.pdf) & [`.tex`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/csco-4d-hilbert-space.tex)
   - [`quantum-entanglement-monograph.pdf`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/quantum-entanglement-monograph.pdf) & [`.tex`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/quantum-entanglement-maths.tex)
   - [`angular-momentum-representation.pdf`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/angular-momentum-representation.pdf)
   - [`two-fermions-infinite-well.pdf`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/two-fermions-infinite-well.pdf)
   - [`potential-well-logical-qubit.pdf`](../projects/01-mathematical-and-theoretical-physics/quantum-mechanics-foundations/potential-well-logical-qubit.pdf)
