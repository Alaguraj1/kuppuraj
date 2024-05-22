const facilities = [
  {
    name: "C02 incubator",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul class='list-facilities'>
    <li>Chamber Construction: Type 304 stainless steel, electropolished</li>
    <li>Shelves: 3 standard / 10 maximum Max.</li>
    <li>Load: 10 kg per shelf, 30 kg maximum device load</li>
    <li>Access Port: 42 mm ID w/ removable silicon plug</li>
    <li>Temperature Control Range: 3° C above ambient - 55° C</li>
    <li>Temperature Setting: Deviation plus or minus 0.1° C</li>
    <li>Humidity Water Reservoir Volume: 3 liters</li>
    <li>Panless CO2 Control: CO2 Concentration Measure/Control Range 0 - 20% Control Accuracy: plus or minus 0.1 ° C CO2 Sensor: TCD (thermal conductivity detector)</li>
</ul>
<p class='purpose'>Purpose: For the maintenance of cell lines and primary cell culture</p>
`,
    image: "/assets/facilities/1.png",
  },
  {
    name: "Molecular Imager Chemi-doc XRS",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul style={{listStyleType: 'disc', paddingLeft: '1rem'}}>
  <li>UV transilluminator,</li>
  <li>Epiwhite illumination,</li>
  <li>Camera,</li>
  <li>White light conversion scheme</li>
</ul>
<p style={{marginTop: '1rem'}}>Softwares available:</p>
<ul style={{listStyleType: 'circle', paddingLeft: '1rem'}}>
  <li>Image Lab software</li>
</ul>
<p style={{marginTop: '1rem'}}>Output:</p>
<ul style={{listStyleType: 'circle', paddingLeft: '1rem'}}>
  <li>As jpeg image or Image J</li>
</ul>
<p style={{marginTop: '1rem'}}>Purpose:</p>
<p>For documentation of agarose gels, western blots, native gels, zymography</p>
`,
    image: "/assets/facilities/2.jfif",
  },
  {
    name: "ZOE Fluorescent cell imager",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul style={{listStyleType: 'disc', paddingLeft: '1rem'}}>
  <li>Imaging channels: 10.1 in. color (26 cm) touch-screen LCD monitor, with anti-glare and anti-fingerprint treatment, 1,280 x 768 pixel image resolution, 80– 180° angle tilt range</li>
  <li>Light source:
    <ul style={{listStyleType: 'circle', marginLeft: '1rem'}}>
      <li>Blue channel: UV LED</li>
      <li>Green channel: Blue LED</li>
      <li>Red channel: Green LED</li>
      <li>Brightfield channel: multiple green LEDs (reduces chromatic aberration)</li>
    </ul>
  </li>
  <li>User interface: 10.1 in. color (26 cm) touch-screen LCD monitor, with anti-glare and anti-fingerprint treatment, 1,280 x 768 pixel image resolution, 80–180° angle tilt range</li>
  <li>Focusing mechanism: Coarse and fine, manual adjustment</li>
  <li>Camera: Monochrome camera, 12 bit CMOS, 5 megapixels</li>
  <li>Display magnification: Standard: 175x; zoom: 700x</li>
  <li>Maximum imaging area: 0.70 mm2 field of view</li>
  <li>Motorized stage: 6 mm travel in X, Y direction, touch-screen control of travel speed and direction</li>
  <li>Compatible with:
    <ul style={{listStyleType: 'circle', marginLeft: '1rem'}}>
      <li>Flasks: T25, T75, or T225</li>
      <li>Multiwell plates: 6-, 12-, 24-, 48-, 96-, or 384-well microplates</li>
    </ul>
  </li>
</ul>
<p style={{marginTop: '1rem'}}>Purpose:</p>
<p>For imaging live cells, photomicrographs, fluorescence images, routine cell counting.</p>`,
    image: "/assets/facilities/3.jpg",
  },
  {
    name: "Stratagene Mx 3005P",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul style={{listStyleType: 'disc', paddingLeft: '1rem'}}>
  <li>Excitation source: Quartz-tungsten halogen lamp</li>
  <li>Detector: Photomultiplier tube (PMT)</li>
  <li>Filters: Excitation and emission filter wheels with four (Mx3000P system) or five (Mx3005P system) customer-selected filter sets</li>
  <li>Thermal system: Peltier-based, 96-well block thermal cycling system</li>
  <li>Thermal system temperature range: 25–99 °C</li>
  <li>Operating environment: 18–35 °C (65–95 °F); up to 85% non-condensing humidity</li>
  <li>Weight: 45 lbs (20.4 kg)</li>
  <li>Dimensions: 14" W × 20" D × 18" H (35.6 cm × 50.8 cm × 45.7 cm)</li>
  <li>Multiplexing capabilities:
    <ul style={{listStyleType: 'circle', marginLeft: '1rem'}}>
      <li>Mx3000P system: 4 dyes per well</li>
      <li>Mx3005P system: 5 dyes per well</li>
    </ul>
  </li>
  <li>Sample container configurations: 200-ml tube format, configured as 96-well plates, strip tubes, or single tubes</li>
  <li>Reaction volume per tube: 10–50 ml</li>
  <li>Electrical power (input): 100–120 volts AC (+/–10%), 50/60 Hz, 10 A 200–240 volts AC (+/–10%), 50/60 Hz, 5 A</li>
</ul>
<p style={{marginTop: '1rem'}}>Purpose:</p>
<ul>
  <li>Robust PCR performance in any application</li>
  <li>Intuitive and efficient operation to ensure a productive laboratory workflow</li>
  <li>Simple maintenance and calibration requirements</li>
  <li>Used for the presence of gene transcripts using fluorescence probes used Ct based measurements</li>
</ul>`,
    image: "/assets/facilities/5.jpg",
  },
  {
    name: "Planetary ball mill",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>Safe-Lock clamping system with 4 griding bowl fasteners for 200-240 v/1, 50-60 Hz, 1730 Walt Material for milling: ZrO2 - 200 ml bowl and 5, 10 mm BallsRPM:300</li>
<li>4 griding bowl fasteners for 200-240 v/1, 50-60 Hz, 1730 Walt</li>
<li>Zirconium oxide 250 ml volume bowl</li>
<li>Zirconium oxide 5 mm balls</li>
<li>Zirconium oxide 10 mm balls</li>
<li>Replacement seal ring PTFE 90/75 mm dia</li>
</ul>
<p>Purpose: The PULVERISETTE 5 classic line is ideally suited for fast, uniform, and extremely fine comminution of very small samples down to colloidal fineness or for mixing and perfect homogenisation of emulsions or pastes.</p>
`,
    image: "/assets/facilities/6.jpg",
  },
  {
    name: "Tubular Vaccum Furnace",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
    <li>External dimensions: 700 mm x 600 mm x 550 mm</li>
    <li>Thermocouple: R-Type</li>
    <li>Max Temperature: 1400o C</li>
</ul>
<p>Purpose:</p>
<ul>
    <li>Phase Transformation</li>
    <li>Sintering</li>
    <li>Annealing</li>
    <li>Normalizing</li>
</ul>`,
    image: "/assets/facilities/6.jpg",
  },
  {
    name: "Electrochemical workstation",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Electrodes: Electrode Polishing Kit, Silver/Silver Chloride Reference Electrode, Gold Milli-electrode (2 mm) and Glassy Carbon Milli-electrode (2 mm).</li>
  <li>Instrument Specification:</li>
  <ul>
    <li>VersaSTAT 4 includes the max current capability to ±2A.</li>
    <li>High current boosters up to 20A for battery, fuel cell, or electroplating applications.</li>
    <li>Excellent current measurement resolution for corrosion, coatings, and micro-electrode analysis.</li>
    <li>An internal frequency response analyzer option for impedance analysis over the frequency range 10 µHz to 1 MHz.</li>
  </ul>
  <li>VersaStudio software is included with all VersaSTAT 4 systems.</li>
</ul>
<strong>Purpose:</strong> Electrochemical Corrosion Studies (Tafel, PDP and EIS) cyclic voltammetry study, Power Density and Charge-Discharge Characteristics`,
    image: "/assets/facilities/8.jpg",
  },
  {
    name: "Microscope",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Objective HI PLAN EPI 5x/0.12 Free working distance: 11.7 mm</li>
  <li>Objective HI PLAN EPI 10x/0.25 Free working distance: 12.0 mm</li>
  <li>Objective HI PLAN EPI 20x/0.40 Free working distance: 1.15 mm</li>
  <li>Objective N PLAN EPI 50x/0.75 Free working distance: 0.37 mm</li>
  <li>Objective N PLAN EPI 50x/0.75 Free working distance: 0.37 mm</li>
</ul>
<h2 class='heading-facilities'>Instrument Specification:</h2>
<ul>
  <li>Do high speed positioning with absolute precision (&lt; ± 1 µm)</li>
  <li>Manually move the stage at any time while keeping the precise slide position tracked</li>
</ul>
<p><strong>Purpose: </strong>Microstructural analysis for Metals and alloys</p>
`,
    image: "/assets/facilities/9.webp",
  },
  {
    name: "Universal Testing Machine",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<p>
Based on the physical properties of the materials and objectives of the tests, these machines can be equipped with load rate or servo controlled mechanisms.
</p>
<h2 class='heading-facilities'>Analogue cum Digital:</h2>
<p>
Analogue cum digital UTMs have a dual measuring system in which the machines can run either on analogue or digital system by a simple changeover switch. They are effective in testing materials under tension, compression, bending, transverse and shear loads.
</p>
<h2 class='heading-facilities'>Purpose:</h2>
<p>
Servo Controlled UTMs are designed to control load rate, extension rate, stress rate and strain rate precisely. They have an inbuilt PC for programming various tests as per requirements and the display graphs can be viewed online. Using these machines, stress vs strain, load vs extension and load vs time studies can be performed with ease and relevant graphs can also be generated.
</p>`,
    image: "/assets/facilities/10.jpg",
  },
  {
    name: "Micro Hardness",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<p>Matsuzawa make Digital Micro Vickers hardness Tester with loads from 1 g to 2 Kgs with manual turret. Hardness Tester with Loads from 1 g to 2 kgs with manual turret<p>

<h2 class='heading-facilities'>Instrument Specification:</h2>
<p>Measurement of macro-hardness is a quick and simple method to obtain mechanical property data for the bulk material from a small sample. It is also widely used for the quality control of surface treatments processes. However, when concerned with coatings and surface properties (important to friction and wear processes), the macro-indentation depth would be too large relative to the surface scale features.</p>

<h2 class='heading-facilities'>Purpose:</h2>
<p>Microhardness Study</p>
`,
    image: "/assets/facilities/11.jfif",
  },
  {
    name: "Fluorescence Spectrophotometer",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
<li>Source: 150W Ozone free CW Xenon lamp for doing steady state Fluorescence Measurements.</li>
<li>Gratings: 1200 gr/mm grating blazed at 330 nm in the excitation and 1200 gr/mm grating blazed at 500 nm.</li>
<li>Excitation wavelength Range: 200-950 nm and Emission wavelength Range: 250-850 nm.</li>
<li>Wavelength accuracy: +/- 0.5 nm and Scan speed: upto 4800 nm/min</li>
<li>Emission detector: photomultiplier range 250-850 nm.</li>
<li>Signal to Noise ratio: 10,000 : 1 (FSD method)</li>
<li>Solid Sample Holder: Designed for viewing front-face fluorescence of thin films, powders, pellets, paper, fibers, or microscopic slides.</li>
<li>Integrating sphere: 121 mm internal diameter Spectralon® integrating sphere with reflectivity from 250-2500 nm. Dimension : 83 cm (w) x 28 cm (h) x 48 cm (d)</li>
</ul>
<p>Purpose: To measure emission wavelength / quantum yield of synthesized compounds</p>`,
    image: "/assets/facilities/12.jpg",
  },
  {
    name: "Simultaneous Thermal analyser",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Furnace: Standard Pt-Rh furnace system (RT – 1600 ˚C).</li>
  <li>Heating rate: maximum heating rate up to 1100°C 100K/min. maximum heating rate from 1100 °C to 1600 °C 50 K/min.</li>
  <li>Mass Flow Controller: MFC 2 connections for purge gas inlet to the sample and 1 connection for protective gas inlet, MFC gas control block for 3 gases, flow rate.</li>
  <li>Calibration weight: 10 mg, 50 mg, 100 mg</li>
  <li>Software: Proteus measurement and analysis software for STA 2500 Regulus for data acquisition, storage and evaluation under MS WINDOWS. Multitasking with simultaneous operation of several thermo analytical systems and simultaneous evaluations.</li>
  <li>Dimension: 450 (W) x 650 (D) x 900 (H)</li>
</ul>

<h2 class='heading-facilities'>Purpose:</h2>
<p>To measure TGA / DTA / DSC of the samples</p>
`,
    image: "/assets/facilities/13.webp",
  },
  {
    name: "Differential Scanning Calorimetery",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
  <li>Temperature range: -170 to +600°C, with LN2 cooling</li>
  <li>Temperature range: -170 to +600 °C (with LN2 cooling system)</li>
  <li>Sensitivity: 3.6 to 4.0 μV/mW</li>
  <li>Heating rate range: 0.001 to 100 K/min</li>
  <li>Mass Flow Controller: 2 connections for purge gas inlet to the sample and 1 connection for protective gas inlet, software controlled gas switches.</li>
  <li>Integrated TA system controller for data acquisition, temperature control and control for system cooling</li>
  <li>Including LN2 cooler, compressed gas (N2) operated supply system, with software controlled magnetic valve, operating overpressure 0.5 bar, with cooling agent storage tank, made from stainless steel, content 60 litres. Dimension : 400 (L) x 600 (W) x 500 (H)</li>
</ul>
<p>Software: Proteus software including Smart Mode and Expert Mode user interfaces</p>

<p><strong>Purpose:</strong> To measure DSC of the samples</p>
`,
    image: "/assets/facilities/14.jpg",
  },
  {
    name: "Thermal evaporation unit",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
    <li>Model: Hind HiVac Vacuum Coating Unit (Model 12A4D)</li>
    <li>Resistive heating evaporation system, which has a diffusion pump backed by rotary pump to achieve chamber base vacuum of 1x10<sup>-6</sup>mbar</li>
    <li>Digital Thickness Monitor: Manual quartz crystal thickness monitor with a resolution of 0.1A/sec rate of evaporation</li>
    <li>Sequential or Simultaneous evaporation of metals</li>
    <li>Substrates Used: Silicon, Glass, Polymers</li>
    <li>Substrate Size: Two 2” substrates can be used simultaneously</li>
    <li>Substrate Temperature: Room temperature to 250oC</li>
    <li>Materials deposited: Chromium and gold</li>
    <li>Chamber base vacuum: 1x10<sup>-6</sup>mbar</li>
    <li>Center Wavelength Tolerance +/- 0.5 nm</li>
    <li>Output Power 100 linewidth – Typical 0.02 nm</li>
    <li>Linewidth – Maximum 0.05 nm</li>
    <li>Fiber Type: 105 µm Core Multimode</li>
    <li>Fiber-Optic Connector SMA</li>
    <li>Numerical Aperture: 0.22</li>
    <li>Operating Temperature Range: 10 to 35°C</li>
    <li>Storage Temperature Range: -10 to 55°C</li>
    <li>Humidity: CE &lt; 80%, non-condensing</li>
    <li>Dimensions: 240 x 176 x 105 mm</li>
</ul>
<p>Purpose: Thermal coating of thin films in Vacuum.</p>`,
    image: "/assets/facilities/15.jpeg",
  },
  {
    name: "Battery tester",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>Max. Applied measurement voltage -± 60 V DC rated input voltage ± 70 V DC Max. rated voltage to earth Resistance measurement ranges -3 mΩ (Max. display 3.1000 mΩ, resolution 0.1 μΩ) to 3000 Ω (Max. display 3100.0 Ω, resolution 100 mΩ), 7 ranges</li>
<li>Accuracy: 30 mΩ to 3000 Ω ranges, ± 0.5% Testing source frequency: 1 kHz ± 0.2 Hz, testing current: 100 mA (3 mΩ range) to 10 μA (3000 Ω range)</li>
<li>Open-circuit Voltage: 25 V peak (3/30 mΩ ranges), 7 V peak (300 mΩ range), 4 V peak (3 Ω to 3000 Ω ranges) Voltage- 6 VDC (resolution 10 μV) to 60 VDC (resolution 100 μV), 2 ranges</li>
<li>Voltage measurement ranges- Accuracy: ± 0.01% rdg. ± 3 dgt. Display- 31000 full digits (resistance), 600000 full digits (voltage), LED</li>
<li>Dimensions and mass- 15 mm (8.46 in) W × 80 mm (3.15 in) H × 295 mm (11.61 in) D, 2.4 kg (84.7 oz) Measurement time- Response time + sampling rate, approx. 10 ms for measurements (Response time depends on reference values and the measurement object.)</li>
<li>Analog output- Measured resistance (displayed value, from 0 to 3.1 V DC, -01 su  ix models only)</li>
</ul>

<p>Purpose:
It can be used as a support tool during the capacity test for cell voltage measurement.</p> 
`,
    image: "/assets/facilities/16.jpg",
  },
  {
    name: "Flash Chromatography",
    image: "/assets/facilities/17.jpg",
    text: `
    <h2 class='heading-facilities'>Technical Specification:</h2>
    <ul>
    <li>
    95% recovery, increasing your yield for multistep synthesis
    </li>
    <li>
HPLC pump technology – accurately pump 1%, no need to premix your mobile phase to achieve shallow gradients
    </li>
    <li>
True Quaternary Gradient – puriFlash® is the only flash purification instrument that allows you to mix 4 channels at the same time
    </li>
    <li>
UV/Visible Detection – Monitor and trigger four different wavelengths and scan the entire range, see peaks you normally would not see
    </li>
    <li>
Intuitive Intersoft X and “Genius” AI software method solutions from your cell phone
    </li>
    <li>
Through pump injection, enabling large scale injections without the need for an extra loading pump and automating multi-injection purifications
    </li>
    </ul>
    <p>
    Purpose: Flash chromatography is a rapid form of preparative column chromatography used to separate compounds based on their polarity. It can be used to purify a wide range of compounds from milligram to gram quantities.
    </p>
    `,
  },
  {
    name: "Battery multiple parameter tester",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>UC-ZS08 Microprocessor-Controlled battery's multiple parameters tester 50 A/18 V 6 Loops</li>
<li>UC-DF08 Microprocessor-Controlled Battery's discharging performance Tester 1000 A/18 V, 1 Loop in one cabinet</li>
<li>UC-ZS08 Microprocessor-Controlled battery's multiple parameters tester 10 A/18 V, 6 Loops; 10 A/3 V, 6 Loops total 12 Loops in one cabinet</li>
</ul>
<p><strong>Purpose:</strong><br>A battery tester is an electronic device intended for testing the state of an electric battery, going from a simple device for testing the charge actually present in the cells and/or its voltage output, to a more comprehensive testing of the battery's condition.</p> `,
    image: "/assets/facilities/18.jpg",
  },
  {
    name: "High temperature bath",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
    <li>Water bath- Make Sigma Inner made of Stainless steel outer made of mild steel with powder Coat Finish</li>
    <li>Temperature range: Above Ambient to 100oC</li>
    <li>Accuracy: ± 2 oC</li>
    <li>Size: 500 mm(L) x 700 mm(H) x 1200 mm(W) with Digital Temperature Controller cum indicator</li>
</ul>

<p><strong>Purpose:</strong><br>It is used to heat samples. Some applications include maintaining cell lines or heating flammable chemicals that might combust if exposed to open flame. A water bath generally consists of a heating unit, a stainless-steel chamber that holds the water and samples.</p>
`,
    image: "/assets/facilities/17.jfif",
  },
  {
    name: "Battery chiller",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
<li>Inner size: Length 1000mm, Width 500mm, Height 500mm,</li>
<li>Outer size: Length 1150mm, Width 650mm, Height 1000mm,</li>
<li>Outer Body: Stainless Steel 304,</li>
<li>Inner Body: Stainless Steel 304,</li>
<li>Compressor: Emerson Copland (Kirloskar),</li>
<li>Door type: 2 Door type opening,</li>
<li>Cooling type: Direct cooling (Penta cool),</li>
<li>Cooling coil: Copper,</li>
<li>Condenser: Copper air cooling,</li>
<li>Insulation: Pu 80mm,</li>
<li>Temperature controller: Digital controller with display,</li>
<li>Temperature range: (-16°C to 19°C),</li>
<li>Refrigerant: R134A,</li>
<li>Working voltage: 230v ± 10%</li>
</ul>
<p>Purpose: The battery chiller is a compact plate-to-plate heat exchanger that transfers thermal energy from the battery coolant loop to the vehicle's refrigerant loop to maintain optimum battery temperatures.</p>
`,
    image: "/assets/facilities/18.png",
  },
  {
    name: "UV-2450 UV Visible spectrophotometer",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<p class='facility'>
E 220V
</p>
<p class='facility'>
Quartz-Cell 10MM Path Length 3ML CA
</p>
<p class='facility'>
Wave length range : 190 - 1100nm
</p>
<p class='facility'>
Depth : 660mm
</p>
<p class='facility'>
Band width : 6 - step switching among 0.1/0.2/0.5/1/2/5nm
</p>
<p class='facility'>
Photometric range : Absorbance : 4-5 Abs, Transmi ance, Reflectance : 0.0 - 999.9%
</p>

<h2 class='heading-facilities'>Purpose:</h2>
<p class='facility'>
It is a quantitative technique used to measure how much a chemical substance absorbs light. Ultraviolet-visible (UV-Vis) spectroscopy is a widely used technique in many areas of science ranging from bacterial culturing, drug identification and nucleic acid purity checks and quantitation, to quality control in the beverage industry and chemical research.
</p>`,
    image: "/assets/facilities/19.jpg",
  },
  {
    name: "Gas Chromatography",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Split-splitless Injection Port Model SPL-2014.</li>
  <li>Injection Port Septum.</li>
  <li>Glass Insert SPL-2010.</li>
  <li>Glass Insert Splitless/WBI.</li>
  <li>Graphite Ferrule G.05.</li>
  <li>Graphite Ferrule G.08.</li>
  <li>Nut with Slit MS.</li>
  <li>GC Solution.</li>
  <li>Capillary column – RTX-1, 30 MTRS X 0.32 MMID X 0.25 µM.</li>
  <li>Hamilton Syringe Type 701 N CAP:10 V.</li>
</ul>

<h2 class='heading-facilities'>Purpose:</h2>
<p>
It is an analytical technique used to separate the chemical components of a sample mixture and then detect them to determine their presence or absence and/or how much is present.
</p>`,
    image: "/assets/facilities/20.png",
  },
  {
    name: "Atomic Absorption Spectrophotometer",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>PC based high performance; Optical Double Beam Atomic Absorption Spectrophotometer operating on Windows7 Professional based WizAArd software for operation on 230 V / 50 Hz.</li>
<li>High sensitivity Photo-Multiplier Tube (PMT) detector for complete wavelength range.</li>
<li>Flame absorption and emission measurement modes as standard.</li>
<li>Optionally upgradable with Graphite Furnace Atomizer.</li>
<li>Fully computerized gas flow control systems.</li>
<li>206-77530-91 High Temperature Burner Head for N2O-C2 flame.</li>
</ul>

<p>Purpose: It detects elements in either liquid or solid samples through the application of characteristic wavelengths of electromagnetic radiation from a light source.</p>`,
    image: "/assets/facilities/21.jpg",
  },
  {
    name: "2D gel Electrophoresis and Chemidoc",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>

<ul>
<li>90-240 VAC, includes basic unit, positive and negative electrode assemblies.</li>
<li>7 cm, 11 cm and 17 cm focusing trays with IPG strip retainers.</li>
<li>1 pack each of 7 cm, 11 cm and 17 cm rehydration/equilibration trays.</li>
<li>2 packs electrode wicks for gel-side down and gel-side up applications.</li>
<li>Mineral oil.</li>
<li>Cleaning concentrate.</li>
<li>pH 3-10 Ready StripTM IPG strips in 7 cm, 11 cm and 17 cm lengths.</li>
<li>Rehydration sample buffer.</li>
<li>Camera, darkroom, UV transilluminator, epi-white illumination, cables, firewire card, Quantity image lab software.</li>
<li>White Light Conversion Screen.</li>
<li>MINI-P TET, 1 core, 10 W, 1.0 MM.</li>
<li>Powerpac Basic Power supply.</li>
</ul>

<p><strong>Purpose:</strong> It is used for separation and fractionation of complex protein mixtures from tissues, cells, or other biological samples. It allows separation of hundreds to thousands of proteins in one gel. Chemidoc is used for visualizing the protein bands in the gel.</p>
`,
    image: "/assets/facilities/22.jpg",
  },
  {
    name: "Gene gun",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
    <li>100/120 V, biolistic transformation system.</li>
    <li>Hepta adaptor.</li>
    <li>Helium pressure regulator.</li>
    <li>Solenoid.</li>
    <li>Spacer rods.</li>
    <li>Micro carrier launch assembly.</li>
    <li>Target shelf.</li>
    <li>5 macro carrier holders.</li>
    <li>500 Optimization Kit.</li>
</ul>

<p><strong>Purpose: </strong>It is commonly used to insert the genetic material into the cells by the particles coated into small DNA sequences.</p>
`,
    image: "/assets/facilities/23.jfif",
  },
  {
    name: "Fluorescence Microscopy",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>Trinocular with Turret Phase System - EXC-350-PH.</li>
<li>0.50x c-mount with focus adjustment, w/Allen wrench – 00-2010-50.</li>
<li>4 position reflected illuminator with field iris, shu er slider for use with mercury lamp house, UV protection plate – 350-3231.</li>
<li>Mercury lamp- house, collector lens system and socket-350-MLH.</li>
<li>100 wa mercury power supply-350-3233.</li>
<li>Blank filter cube – 350-3231-FC.</li>
<li>Ushio 102-DH Mercury Lamp – 3254-U.</li>
<li>Excelis HD Camera, 1080P HD, 60FPS US B 2.0 Output, SD Card 1/2.8” CMOS Sensor AU-600-HD.</li>
<li>DAPI Filter Set Exciter: AT350/50x Dichroic: AT410DC Emi er: AT460/50 m – 350-39000.</li>
<li>GFP, FITC Filter-350-39002.</li>
<li>TRITC Filter Cube – 350-39004.</li>
</ul>
<p>Purpose: It is highly sensitive, specific, reliable and extensively used by scientists to observe the localization of molecules within cells, and of cells within tissues.</p>`,
    image: "/assets/facilities/24.jfif",
  },
  {
    name: "Ultra High-performance Liquid Chromatography",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
    <li>176017041-Arc UHPLC Core System (Max back pressure 9500 psi).</li>
    <li>176299801-2998 Photodiode Array Detector.</li>
    <li>186241401-2414 Refractometer Detector (blue).</li>
    <li>186186301-Alliance Column Heater (Blue).</li>
    <li>430002585-ASSY, EXTENSION LOOP, 1000uL, BIO.</li>
    <li>200000476-Startup Kit, Arc HPLC Sys with CHC/CH.</li>
    <li>410001647-SYRINGE, 500 uL, HPLC.</li>
    <li>200000477-Startup Kit, Arc HPLC Detector.</li>
    <li>405003742-HOLDER, 24 WELL, 4ML VIAL.</li>
    <li>176002203-Empower 3 Per Single System SW 5 Users.</li>
    <li>667003974-Empower 3 Personal System Suitability.</li>
    <li>430002007-ASSY, EXTENSION LOOP, 250uL.</li>
    <li>176003984A4-SQT Arc UV10mm + RI QualServ on Emp3.</li>
    <li>176003428-Waters Fraction Manager Analytical.</li>
    <li>176003604-Kit, WFMA w/Alliance Accessories.</li>
    <li>205001042-Kit, 10 mL Vial Holder.</li>
    <li>186002560-SunFire C18 5 μm 4.6 x 250 mm Column.</li>
    <li>186002554-SunFire C18 3.5 μm 4.6 x 150 mm Column.</li>
    <li>186007408-CORTECS C18+ 4.6 x 150 mm 2.7 μm Column.</li>
</ul>
<h2 class='heading-facilities'>Purpose:</h2>
<p>It is a technique used to separate different constituents of a compound. It is used to confirm the identity of a drug and provide quantitative results and also to monitor the progress of the therapy of a disease.</p>`,
    image: "/assets/facilities/25.jfif",
  },
  {
    name: "Rota vapour",
    text: `<h2 class="heading-facilities">Technical Specification:</h2>
<ul>
  <li>Evaporating flask size: 50 – 5000 mL</li>
  <li>Lift mechanism: Manual or automatic</li>
  <li>Temperature range: 20 – 220 °C</li>
  <li>Rotation speed range: 10-280 rpm</li>
  <li>Heating Bath B-301</li>
  <li>Vacuum pump V-300</li>
  <li>Recirculating Chiller F-305/F-308</li>
  <li>Voltage: 220-240 V</li>
</ul>
<p>Purpose:</p>
<p class="purpose-description">A rotary evaporator is a device used in labs for the efficient and gentle removal of solvents from samples by evaporation.</p>
`,
    image: "/assets/facilities/28.webp",
  },
  {
    name: "Raman spectrometer",
    text: `h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>532nm Laser source for excitation</li>
  <li>Spectrometer Type: Czerny-Turner,</li>
  <li>Focal Length: 200 mm1 (1200l/mm holographic grating 500 nm Blazed)</li>
  <li>Spectral range.100 -8000 cm-1</li>
  <li>CCD : Toshiba TCD, Number of Pixels : 3,648</li>
  <li>Mapping Stage</li>
  <li>Mapping sample stage: XYMR100</li>
  <li>Resolution : 0.1 Micron</li>
</ul>
<p>Purpose:</p>
<ul>
  <li>To know the vibrational energy levels of materials</li>
</ul>
`,
    image: "/assets/facilities/27.jfif",
  },
  {
    name: "Dissolution apparatus",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Dissolution Vessel;</li>
  <li>RPM; 20 to 350 RPM</li>
  <li>RPM Accuracy; ± 1 RPM</li>
  <li>Temprature Range ; 20° to 55° degree</li>
  <li>Temp Accuracy ; ± 0.1 ° C</li>
  <li>6 Channel Temperature Reader</li>
</ul>
<p>Purpose: Dissolution Studies of Pharma samples</p>
`,
    image: "/assets/facilities/28.webp",
  },
  {
    name: "High performance Liquid Chromatography",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
<li>Low dispersion fluidics</li>
<li>5,000 psi (345 bar) system pressure capability for Solvent/Sample Management fluidics</li>
<li>Eleven available gradient curve profiles; linear, step, concave and convex</li>
<li>Solvent conditioning via four-channel high efficiency vacuum in-line degasser</li>
<li>120 sample capacity via industry-standard 2 mL vials configured in 5x24 vial carousels</li>
<li>4°C to 40°C temperature range, darkened sample compartment</li>
<li>Column temperature control</li>
<li>2998 PDA DETECTOR</li>
</ul>
<p>Purpose: Identification and Separation of Pharma Samples</p>
`,
    image: "/assets/facilities/29.jpg",
  },
  {
    name: "FTIR Spectrometer",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Spectral range: 7800–350 cm<sup>-1</sup> optimized, mid-infrared KBr beamsplicer</li>
  <li>Signal-to-noise: 1 minute: 35,000:1 (peak to peak)</li>
  <li>Spectral resolution: better than 0.8 cm<sup>-1</sup>; better than 0.5 cm<sup>-1</sup> using aperture</li>
  <li>Wavenumber precision: 0.001 cm<sup>-1</sup> at 2000 cm-1</li>
  <li>Wavenumber accuracy: 0.05 cm<sup>-1</sup> at 2000 cm-1</li>
  <li>Ordinate linearity (ASTM E1421): &lt;0.15 % T deviation from 0.0 % T</li>
  <li>Detector: Fast recovery deuterated triglycine sulfate (DTGS) detector</li>
  <li>Beamsplicer: KBr/Ge mid infrared optimized</li>
</ul>
<h2 class='heading-facilities'>Purpose:</h2>
<p>Identification of Functional Groups and purity of Pharma Samples</p>
`,
    image: "/assets/facilities/30.jpg",
  },
  {
    name: "UV 3200 Double Beam Spectrophotometer",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
<li>Optical System - Double Beam Optical System with Automatic 8-Cell Changer - Model 3200</li>
<li>Wavelenghth range - 190 nm to 1100 nm</li>
<li>Wavelength Accuracy - ± 0.1 nm @656.1 nm D2 ± 0.3 nm (190 to 1100 nm)</li>
<li>Wavelenght Reproducability - 0.1 nm</li>
<li>Spectral Bandwith - Variable 0.5,1,2,4 nm</li>
<li>Detector - Silicon Photodiode (Dual)</li>
<li>Light Source - Tungsten and Deuterium Lamp, pre-aligned</li>
<li>Scan Speed - 2 to 3000 nm per Minute</li>
</ul>
<p>Purpose: Measurement of Absorbance and Purity of Pharma Samples</p>
`,
    image: "/assets/facilities/31.jpg",
  },
  {
    name: "Particle size and Zeta potential analyzer",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<p>Zeta sizer Advance Series - Ultra for the measurement of size, molecular weight, particle concentration and zeta potential charge of dispersed particles &amp; molecules.</p>
<p>The system includes max. 10 mW HeNe laser (633 nm) with high sensitivity APD detector. Size/Molecular Weight by DLS/SLS measured at 173-degrees using Non-Invasive Back Scattering, 90-degree DLS/SLS measurements also possible.</p>
<p>Unique Adaptive Correlation for faster, reproducible, DLS measurements with no data loss. Incorporates Multi-Angle Dynamic Light Scattering (MADLS®) measurements for higher resolution DLS analysis and peak particle concentration analysis of samples 500 &lt; nm. Zeta potential analysis incorporates M3-PALS and Constant Current Zeta Mode for measurement of zeta potential distributions and improved data quality in conductive media.</p>
<h2 class='heading-facilities'>Purpose:</h2>
<p>Malvern Particle Size and Zeta Potential Analyzer is used to measure particle and molecular size from less than a nanometer to several microns using dynamic light scattering and Zeta Potential by electrophoretic light scattering.</p>
`,
    image: "/assets/facilities/32.webp",
  },
  {
    name: "10 Liter fermenter with accessories",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
  <li>Fermentor vessel - 10 Litre</li>
  <li>Stainless steel & Glass</li>
  <li>Digital Display</li>
  <li>4 Blade rushton turbine impellars</li>
  <li>Temperature control, pressure control and air flow</li>
  <li>Glass electrode of PH probe sensor</li>
  <li>Polorographic Dissolved oxygen sensor</li>
</ul>

<h2 class='heading-facilities'>Purpose: </h2>
<p>Fermentor is used for commercial production in Fermentation with use of microorganisms to generate Product of high value (drugs, enzymes etc)</p>
`,
    image: "/assets/facilities/33.jpg",
  },
  {
    name: "Fraction collector",
    text: `<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>3-port, PTFE, 67 µL internal volume</li>
  <li>3.5 µL dead volume from common port to the normally closed port, up to 20 mL/min with standard or large bore needle.</li>
  <li>Minimum drop per second: 20 drops</li>
  <li>Peak parameters: peak height or level, in mV and peak width at half-height, in minutes. Minimum peak height of fractionation</li>
  <li>Detector-collector delay: 0.01 minute increments. Up to 10 collection windows and 10 drain steps in any mode.</li>
</ul>

<p>Purpose:</p>
<p>Fraction collector used to collect/drain the fraction from biological sample.</p> 
`,
    image: "/assets/facilities/34.webp",
  },
  {
    name: "U2900 UV Visible Spectrophotometer",
    text: `<h2 class='heading-facilities'>Technical Specification: </h2>
<ul>
<li>Large 10.4” Color LCD for clear data display</li>
<li>Data storage at external USB Flash disk</li>
<li>Maximum wavelength: 1100 nm, Minimum wavelength : 190 nm</li>
<li>Optical system: double beam</li>
<li>Spectral band: 1.5 nm</li>
<li>Detection: Silicon photodiode</li>
</ul>

<p><strong>Purpose:</strong></p>
<p>UV-Visible double-beam spectroscopy system for Biotechnological applications measuring small Volumes sample absorbance and concentration.</p>
`,
    image: "/assets/facilities/36.jpg", //26
  },
  {
    name: "20L Reactor",
    text: `
<h2 class='heading-facilities'>Technical Specification:</h2>
<ul>
  <li>Vessel Capacity: 20L / 5.28Gal</li>
  <li>Material Flask Capacity: 5L / 1.32Gal</li>
  <li>Receiving Flask Capacity: 5L / 1.32Gal</li>
  <li>Fluid Jacket Capacity: 9L / 2.37Gal</li>
  <li>Glass Material: GG-17 Borosilicate Glass | Thickness: 6.5mm ±0.5mm</li>
  <li>Rotary Speed: 0-450RPM</li>
  <li>Glass Temperature Range: -80°C to 210°C / -112°F to 410°F</li>
  <li>Power Requirements: 230V 60Hz 15A 1p</li>
  <li>Stirrer Wattage: 120W</li>
  <li>Lowest Vacuum Level: 0.098Mpa / 25 Torr / 25000 Microns</li>
  <li>Speed Regulation: Digital Step-Less</li>
  <li>Condenser and Feed Valve Barbs: 10MM - 3/8"</li>
  <li>Bottom Drain Port: 35MM - 1 3/8"</li>
  <li>Receiving Flask Barb: 16MM - 5/8"</li>
  <li>Jacket Pressure: Maximum 29 psi - Nominal 25 psi</li>
  <li>Fluid Connection: 16MM - 5/8" barb or 1/2" NPT (JR-100: 5/8 Barb or 3/4" MNPT)</li>
  <li>Certification: ETL to UL and CSA Standards</li>
  <li>External Dimensions LxWxH: 39 x 20.4 x 79"</li>
  <li>Weight: 176 lbs</li>
</ul>

    `,
    image: "/assets/facilities/37.jfif",
  },
];

export default facilities;
