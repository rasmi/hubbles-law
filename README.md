# Hubble's Law
A visual explanation of Hubble's Law and the expansion of the universe, intended for a common audience, built up from the concept of redshift and extended to the Cosmic Microwave Bacground.

## Interactive and Animated Figures
One animated figure and three interactive figures and  are included and were built using [Paper.js](http://paperjs.org/).  

The first figure ([`js/lightwaves.js`](js/lightwaves.js)) animates light as a wave, split into different colors/wavelengths/frequencies. It would have perhaps been more useful to make a single wave that could interactively be dragged horizontally to contract or expand its wavelength and change the color and frequency accordingly, but this split format ultimately prevailed.  

The second figure ([`js/doppler.js`](js/doppler.js)) allows the user to interactively drag their mouse around a canvas to create wavefront-like circles. When done in a particular direction, the resulting effect is similar to that of the doppler shift. Mouse tool distance and animation parameters were tweaked to encourage motion in some direction and show the compressed wave effect without cluttering the canvas too much, while also animating smoothly.  

The third figure ([`js/spectrum.js`](js/spectrum.js)) shows the net effect of redshift and blueshift as we perceive doppler shifted light through spectral lines. Actual spectral lines weren't explained to maintain the focus of the demonstrations.  

The fourth figure ([`js/expansion.js`](js/expansion.js)) allows the user to interacively drag up or to the right to expand the universe, and down or to the left to contract the universe. The universe is represented by a circle with randomly placed dots acting as objects in it. This demonstration is misleading because it implies that the universe has a center and edge, but the page explains that this isn't the case. Simplifications about expansion rates and the geometry of the universe were made to maintain the focus of the demonstration and keep concepts simple. The classic surface-of-a-balloon analogy is also used. A 3D figure (perhaps based on [three.js](http://threejs.org/)) might be more compelling, and drawing lightly dashed vectors between points may better illustrate increasing distances between all objects in every direction.

## Images
Images illustring the visual spectrum were retrieved from Wikimedia Commons.  

The [first](https://commons.wikimedia.org/wiki/Category:Visible_spectrum#/media/File:Spectre_detail.png) ([`img/spectrum_waves.png`](img/spectrum_waves.png)) illustrates waves of varying length above the visible spectrum and was cropped slightly for aesthetic purposes. It was used as a background for the interactive figure of how we perceive doppler-shifted spectral lines ([`js/spectrum.js`](js/spectrum.js)).  

Finally, an image of the CMB WMAP data ([`img/cmb.png`](img/cmb.png)) was retrieved from [NASA](http://map.gsfc.nasa.gov/media/121238/index.html).

## Plots
Hubble's original plot ([`img/hubbleplot.png`](img/hubbleplot.png)) was retreived from [his 1929 paper](http://adsabs.harvard.edu/cgi-bin/nph-bib_query?bibcode=1929PNAS...15..168H).  

For the modern plot, data was retrieved from the SDSS [Photoz table](http://skyserver.sdss.org/dr12/en/help/browser/browser.aspx?cmd=description+Photoz+U) using their [online SQL Search tool](http://skyserver.sdss.org/dr12/en/tools/search/sql.aspx). The following SQL query was used to select the luminosity distances and photometric redshifts of 1000 galaxies:
```
SELECT TOP 1000 lumDist, z 
FROM Photoz
WHERE z>0
```
This data was exported as a csv using the tool, and is located in [`data/redshift.csv`](data/redshift.csv). The data was plotted using [Angular-nvD3](https://krispo.github.io/angular-nvd3/), which relies on [D3.js](http://d3js.org/) and [AngularJS](https://angularjs.org/). Though a plot could be done simply with D3.js; Angular, [Bootstrap](http://getbootstrap.com/), and [jQuery](https://jquery.org/) were included to allow for easy UI interactions in case of more complex future additions.
