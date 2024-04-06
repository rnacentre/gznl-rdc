---
title: "Ribo centre - Structure"
layout: structure
excerpt: "Ribo centre - Structure"
sitemap: false
permalink: /structure/
---

# Structure
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="{{ site.url }}{{ site.baseurl }}/js/ribozyme.js"></script>
<div id="ribozymewikisection0"></div>-->



<!--var id = location.search.split(`id=`)[1];-->
<!--</script>-->

<!--<script type="text/javascript">
document.write(`${id}`);
document.write(`<div id="${id}wikisection1"></div>`);
</script>-->


> <font size=4>Shows the structure of Ribozymes.<font><br>

<html>
<head>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>Ribozyme structure - export</title>
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css">
  <!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.2/css/uikit.min.css">-->
  <!--<link rel="stylesheet" type="text/css" href="file:///E:/jekyll/DataTables-master/media/css/dataTables.uikit.css">-->
</head>
    <style>
		th {
        background-color: #0874c4;
        background-color: #0874c4;
        background-color: #0874c4;
        color: rgba(255,255,255,0.9);
		    cursor: pointer;
        }
	</style>
  <script type="text/javascript"  src="https://code.jquery.com/jquery-3.5.1.js"></script>
	<script type="text/javascript"  src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
	<script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
	<script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
	<script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
	<script type="text/javascript"  src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>
  <script type="text/javascript"  src="https://www.ribocentre.org/js/dataTables.uikit.js"></script>

	<script type="text/javascript">

		$(document).ready(function() {
			$.noConflict();
			$('#mytable').DataTable( {
				dom: 'Bfrtip', 
				buttons: [
					'copy', 'csv', 'excel', 'pdf', 'print'
				]
				
			} );
		} );
   </script>

<body>
    <div>
	  <table id="mytable" class="display" cellspacing="0" width="100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description(PDB)</th>
                <th>Species</th>
                <th>Phasing</th>
                <th>Structure Determination</th>
                <th>PDB</th>
                <th>Res(Å)</th>
                <th>Year</th>
       	    <th>Journal</th>
            </tr>
	  </thead>
             <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Three dimensional structure of a hammerhead ribozyme</td>
    <td>N/A</td>
    <td>MIR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1HMH"  target="_blank"   ><b> 1HMH</b></a> </td>
    <td>2.6</td>
    <td>1994</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>The 2.2 A structure of a full-length catalytically active hammerhead ribozyme</td>
    <td>Schistosoma mansoni</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3ZD5"  target="_blank"   ><b> 3ZD5</b></a> </td>
    <td>2.2</td>
    <td>2006</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Hammerhead Ribozyme G12A mutant pre-cleavage</td>
    <td>N/A</td>
    <td>MIR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2QUS"  target="_blank"   ><b> 2QUS</b></a> </td>
    <td>2.4</td>
    <td>2008</td>
    <td>PLoS Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>High-resolution full-length hammerhead ribozyme</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3ZP8"  target="_blank"   ><b> 3ZP8</b></a> </td>
    <td>1.55</td>
    <td>2013</td>
    <td>J Mol Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>The crystal structure of an all-rna hammerhead ribozyme: a proposed mechanism for rna catalytic cleavage</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1MME"  target="_blank"   ><b> 1MME</b></a> </td>
    <td>3.1</td>
    <td>1995</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Full-length hammerhead ribozyme with g12a substitution at the general base position</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3ZD4"  target="_blank"   ><b> 3ZD4</b></a> </td>
    <td>2.2</td>
    <td>2014</td>
    <td>Acta Crystallogr D Biol Crystallogr</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Inhibition of the hammerhead ribozyme cleavage reaction by site-specific binding of tb(iii)</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/359D"  target="_blank"   ><b> 359D</b></a> </td>
    <td>2.9</td>
    <td>1998</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Capturing the structure of a catalytic rna intermediate: rna hammerhead ribozyme, mg(ii)-soaked</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/301D"  target="_blank"   ><b> 301D</b></a> </td>
    <td>3.0 </td>
    <td>1996</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Capturing the structure of a catalytic rna intermediate: the hammerhead ribozyme</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/299D"  target="_blank"   ><b> 299D</b></a> </td>
    <td>3</td>
    <td>1996</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Hammerhead ribozyme g12a mutant after cleavage</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2QUW"  target="_blank"   ><b> 2QUW</b></a> </td>
    <td>2.2</td>
    <td>2008</td>
    <td>PLoS Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>The structural basis of hammerhead ribozyme self-cleavage</td>
    <td>N/A</td>
    <td>MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/379D"  target="_blank"   ><b> 379D</b></a> </td>
    <td>3.1</td>
    <td>1998</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Hammerhead ribozyme with 5'-5' g-g linkage: conformational change experiment</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1Q29"  target="_blank"   ><b> 1Q29</b></a> </td>
    <td>3</td>
    <td>2003</td>
    <td>J Mol Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction-g12a mutant in mg2+</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DH6"  target="_blank"   ><b> 5DH6</b></a> </td>
    <td>2.78</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>A three-dimensional model for the hammerhead ribozyme based on fluorescence measurements</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>Fluorescence transfer</td>
    <td><a href="https://www.rcsb.org/structure/1RMN"  target="_blank"   ><b> 1RMN</b></a> </td>
    <td>N/A</td>
    <td>1994</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Capturing the structure of a catalytic rna intermediate: rna hammerhead ribozyme, mn(ii)-soaked</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/300D"  target="_blank"   ><b> 300D</b></a> </td>
    <td>3</td>
    <td>1996</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Crosslinked Hammerhead Ribozyme Initial State</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1NYI"  target="_blank"   ><b> 1NYI</b></a> </td>
    <td>2.85</td>
    <td>2003</td>
    <td>J Mol Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction-WT ribozyme in Mg2+</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DQK"  target="_blank"   ><b> 5DQK</b></a> </td>
    <td>2.71</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Full-length hammerhead ribozyme with Mn(II) bound</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2OEU"  target="_blank"   ><b> 2OEU</b></a> </td>
    <td>2</td>
    <td>2008</td>
    <td>Chem Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction- G12A mutant in Zn2+</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DH8"  target="_blank"   ><b> 5DH8</b></a> </td>
    <td>3.3</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two active site divalent ion in the crystal structure of the hammerhead ribozyme bound to a transition state analog-Mg2+</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5EAO"  target="_blank"   ><b> 5EAO</b></a> </td>
    <td>2.99</td>
    <td>2016</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction-WT ribozyme in Mn2+ at low pH</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DI4"  target="_blank"   ><b> 5DI4</b></a> </td>
    <td>2.95</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction-WT ribozyme in Mn2+ at high pH</td>
    <td>synthetic construct</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DI2<br> &nbsp;&nbsp;"  target="_blank"   ><b> 5DI2<br> &nbsp;&nbsp;</b></a> </td>
    <td>2.99</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two divalent metal ions and conformational changes play roles in the hammerhead ribozyme cleavage reaction-G12A mutant in Mn2+</td>
    <td>synthetic construct</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DH7"  target="_blank"   ><b> 5DH7</b></a> </td>
    <td>3.06</td>
    <td>2015</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/hammer.html"  target="_blank"   ><b> Hammerhead</b></a> </td>
    <td>Two active site divalent ion in the crystal structure of the hammerhead ribozyme bound to a transition state analog-Mn2+</td>
    <td>synthetic construct</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5EAQ"  target="_blank"   ><b> 5EAQ</b></a> </td>
    <td>3.2</td>
    <td>2016</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>The structure of the isolated, central hairpin of the hdv antigenomic ribozyme, nmr, 10 structures</td>
    <td>Hepatitis delta virus</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1ATO"  target="_blank"   ><b> 1ATO</b></a> </td>
    <td>N/A</td>
    <td>1997</td>
    <td>EMBO J</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>U1a spliceosomal protein/hepatitis delta virus genomic ribozyme complex</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1DRZ"  target="_blank"   ><b> 1DRZ</b></a> </td>
    <td>2.3</td>
    <td>1998</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal structure of a C75U mutant Hepatitis Delta Virus ribozyme precursor, in Cu2+ solution</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1SJ4"  target="_blank"   ><b> 1SJ4</b></a> </td>
    <td>2.7</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Hepatitis Delta Virus Gemonic Ribozyme Precursor, with Mg2+ Bound</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1SJ3"  target="_blank"   ><b> 1SJ3</b></a> </td>
    <td>2.2</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Product with C75U Mutaion, cleaved in Imidazole and Mg2+ solutions</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VC6"  target="_blank"   ><b> 1VC6</b></a> </td>
    <td>2.8</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Wild Type Hepatitis Delta Virus Gemonic Ribozyme Precursor, in EDTA solution</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VC5"  target="_blank"   ><b> 1VC5</b></a> </td>
    <td>3.4</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, in Imidazole and Sr2+ solution</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VC0"  target="_blank"   ><b> 1VC0</b></a> </td>
    <td>2.5</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, in Ba2+ solution</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VBZ"  target="_blank"   ><b> 1VBZ</b></a> </td>
    <td>2.8</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, in EDTA solution</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VBX"  target="_blank"   ><b> 1VBX</b></a> </td>
    <td>2.7</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, in Cobalt Hexammine solution</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1SJF"  target="_blank"   ><b> 1SJF</b></a> </td>
    <td>2.75</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, and Mn2+ bound</td>
    <td>Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VBY"  target="_blank"   ><b> 1VBY</b></a> </td>
    <td>2.9</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Hepatitis Delta Virus ribozyme precursor structure, with C75U mutation, bound to Tl+ and cobalt hexammine (Co(NH3)63+)</td>
    <td>Homo sapiens</td>
    <td>MR (Tl+)</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2OJ3"  target="_blank"   ><b> 2OJ3</b></a> </td>
    <td>2.9</td>
    <td>2007</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Hepatitis Delta Virus gemonic ribozyme precursor with C75U mutation and bound to monovalent cation Tl+</td>
    <td>Homo sapiens</td>
    <td>MR (Tl+)</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2OIH"  target="_blank"   ><b> 2OIH</b></a> </td>
    <td>2.4</td>
    <td>2007</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>A 1.9A crystal structure of the HDV ribozyme precleavage suggests both Lewis acid and general acid mechanisms contribute to phosphodiester cleavage</td>
    <td>Homo sapiens</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3NKB"  target="_blank"   ><b> 3NKB</b></a> </td>
    <td>1.92</td>
    <td>2010</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>A Second Look at the HDV Ribozyme Structure and Dynamics.</td>
    <td>Homo sapiens</td>
    <td>Rebuild</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4PR6(原1CX0)"  target="_blank"   ><b> 4PR6(原1CX0)</b></a> </td>
    <td>2.3</td>
    <td>2014</td>
    <td>Nucleic Acids Res</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Hepatitis delta virus ribozyme<br> &nbsp;&nbsp;</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1CX0"  target="_blank"   ><b> 1CX0</b></a> </td>
    <td>N/A</td>
    <td>1998</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>A Second Look at the HDV Ribozyme Structure and Dynamics.</td>
    <td>Homo sapiens</td>
    <td>Rebuild</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4PRF(原1VC7)"  target="_blank"   ><b> 4PRF(原1VC7)</b></a> </td>
    <td>2.4</td>
    <td>2014</td>
    <td>Nucleic Acids Res</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/HDV.html"  target="_blank"   ><b> HDV </b></a> </td>
    <td>Crystal Structure of the Hepatitis Delta Virus Gemonic Ribozyme Precursor, with C75U mutaion, in Sr2+ solution</td>
    <td>Hepatitis delta virus, Homo sapiens</td>
    <td>Se-MAD,Ir-SAD,MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1VC7"  target="_blank"   ><b> 1VC7</b></a> </td>
    <td>N/A</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal structure of a hairpin ribozyme in the catalytically-active conformation</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1M5K"  target="_blank"   ><b> 1M5K</b></a> </td>
    <td>2.4</td>
    <td>2002</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal structure of a junctionless all-RNA hairpin ribozyme </td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2OUE"  target="_blank"   ><b> 2OUE</b></a> </td>
    <td>2.05</td>
    <td>2006</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Transition State Stabilization by a Catalytic RNA</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1M5O"  target="_blank"   ><b> 1M5O</b></a> </td>
    <td>2.2</td>
    <td>2002</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Transition State Stabilization by a Catalytic RNA</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1M5P"  target="_blank"   ><b> 1M5P</b></a> </td>
    <td>2.6</td>
    <td>2002</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Transition State Stabilization by a Catalytic RNA</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1M5V"  target="_blank"   ><b> 1M5V</b></a> </td>
    <td>2.4</td>
    <td>2002</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>An all-RNA Hairpin Ribozyme with mutation U39C</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1X9C"  target="_blank"   ><b> 1X9C</b></a> </td>
    <td>2.2 </td>
    <td>2005</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>An all-RNA Hairpin Ribozyme with mutation U39C</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1X9K"  target="_blank"   ><b> 1X9K</b></a> </td>
    <td>3.2</td>
    <td>2005</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>The crystal structure of an all-RNA minimal Hairpin Ribozyme with mutant G8I at the cleavage site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1ZFT"  target="_blank"   ><b> 1ZFT</b></a> </td>
    <td>2.3</td>
    <td>2006</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>The structure of an all-RNA minimal Hairpin Ribozyme with Mutation G8A at the cleavage site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1ZFV"  target="_blank"   ><b> 1ZFV</b></a> </td>
    <td>2.4</td>
    <td>2006</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>The Structure of a minimal all-RNA Hairpin Ribozyme with the mutant G8U at the cleavage site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1ZFX"  target="_blank"   ><b> 1ZFX</b></a> </td>
    <td>2.38</td>
    <td>2006</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a minimal, mutant all-RNA hairpin ribozyme (U39C, G8MTU)</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2BCY"  target="_blank"   ><b> 2BCY</b></a> </td>
    <td>2.7</td>
    <td>2006</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a minimal, mutant all-RNA hairpin ribozyme (U39C, G8I, 2'deoxy A-1)</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2BCZ"  target="_blank"   ><b> 2BCZ</b></a> </td>
    <td>2.4</td>
    <td>2006</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a minimal, native (U39) all-RNA hairpin ribozyme</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2D2K"  target="_blank"   ><b> 2D2K</b></a> </td>
    <td>2.65</td>
    <td>2005</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a minimal, all-RNA hairpin ribozyme with a propyl linker (C3) at position U39</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2D2L"  target="_blank"   ><b> 2D2L</b></a> </td>
    <td>2.5</td>
    <td>2005</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal structure of a minimal, all RNA hairpin ribozyme with modifications (g8dap, u39c) at ph 8.6</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2FGP"  target="_blank"   ><b> 2FGP</b></a> </td>
    <td>2.4</td>
    <td>2006</td>
    <td>Biochemistry </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a junctioned hairpin ribozyme incorporating 9atom linker and 2'-deoxy 2'-amino U at A-1</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2NPY"  target="_blank"   ><b> 2NPY</b></a> </td>
    <td>2.65</td>
    <td>2007</td>
    <td> Acta Crystallogr D Biol Crystallogr </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>inimally Junctioned Hairpin Ribozyme Incorporates A38G Mutation and a 2',5'-Phosphodiester Linkage at the Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3B58"  target="_blank"   ><b> 3B58</b></a> </td>
    <td>2.65</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a Minimally Hinged Hairpin Ribozyme Incorporating A38G mutation with a 2'OMe modification at the active site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3B5A"  target="_blank"   ><b> 3B5A</b></a> </td>
    <td>2.35</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Crystal Structure of a Minimally Hinged Hairpin Ribozyme Incorporating the Ade38Dap Mutation and a 2',5' Phosphodiester Linkage at the Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3B5F"  target="_blank"   ><b> 3B5F</b></a> </td>
    <td>2.7</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimally Hinged Hairpin Ribozyme Incorporates A38DAP Mutation and 2'-O-methyl Modification at the Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3B5S"  target="_blank"   ><b> 3B5S</b></a> </td>
    <td>2.25</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimally Hinged Hairpin Ribozyme Incorporates Ade38(2AP) and 2',5'-Phosphodiester Linkage Mutations at the Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3B91"  target="_blank"   ><b> 3B91</b></a> </td>
    <td>2.75</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimally Junctioned Hairpin Ribozyme Incorporating A38(2AP) and A-1 2'-O-Me Modifications near Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3BBI"  target="_blank"   ><b> 3BBI</b></a> </td>
    <td>2.35</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Miminally Junctioned Hairpin Ribozyme Incorporates A38C and 2'5'-phosphodiester Linkage within Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3BBK"  target="_blank"   ><b> 3BBK</b></a> </td>
    <td>2.75</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimally Junctioned Hairpin Ribozyme Incorporates A38C and 2'O-Me Modification at Active Site</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3BBM"  target="_blank"   ><b> 3BBM</b></a> </td>
    <td>2.65</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>crystal structure of a minimal, mutant, all-RNA hairpin ribozyme (A38C, A-1OMA) grown from MgCl2</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3CR1"  target="_blank"   ><b> 3CR1</b></a> </td>
    <td>2.25</td>
    <td>2008</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>An all-RNA Hairpin Ribozyme with mutation A38N1dA</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3GS1"  target="_blank"   ><b> 3GS1</b></a> </td>
    <td>2.85</td>
    <td>2009</td>
    <td>J Am Chem Soc </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>An all-RNA hairpin ribozyme A38N1dA variant with a product mimic substrate strand</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3GS5"  target="_blank"   ><b> 3GS5</b></a> </td>
    <td>2.8</td>
    <td>2009</td>
    <td>J Am Chem Soc </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>An all-RNA hairpin ribozyme A38N1dA38 variant with a transition-state mimic substrate strand</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3GS8"  target="_blank"   ><b> 3GS8</b></a> </td>
    <td>2.9</td>
    <td>2009</td>
    <td>J Am Chem Soc </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>A Transition-State Interaction Shifts Nucleobase Ionization toward Neutrality To Facilitate Small Ribozyme Catalysis</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4G6P"  target="_blank"   ><b> 4G6P</b></a> </td>
    <td>2.6</td>
    <td>2012</td>
    <td>J Am Chem Soc</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimal Hairpin Ribozyme in the Transition State with G8I Variation</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4G6R"  target="_blank"   ><b> 4G6R</b></a> </td>
    <td>2.9</td>
    <td>2012</td>
    <td>J Am Chem Soc</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hairpin.html"  target="_blank"   ><b> Hairpin </b></a> </td>
    <td>Minimal Hairpin Ribozyme in the Transition State with A38P Variation</td>
    <td>tobacco ringspot virus</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4G6S"  target="_blank"   ><b> 4G6S</b></a> </td>
    <td>2.84</td>
    <td>2012</td>
    <td>J Am Chem Soc</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Crystal structure of the VS ribozyme - G638A mutant</td>
    <td>Neurospora</td>
    <td>SAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4R4V"  target="_blank"   ><b> 4R4V</b></a> </td>
    <td>3.1</td>
    <td>2015</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Crystal Structure of the VS ribozyme-A756G mutant</td>
    <td>Neurospora</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4R4P"  target="_blank"   ><b> 4R4P</b></a> </td>
    <td>3.1</td>
    <td>2015</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Crystal structure of the VS ribozyme - wild-type C634</td>
    <td>Neurospora</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5V3I"  target="_blank"   ><b> 5V3I</b></a> </td>
    <td>3.3</td>
    <td>2017</td>
    <td>J Am Chem Soc</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the A730 loop of the Neurospora VS ribozyme</td>
    <td>Neurospora</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2L5Z"  target="_blank"   ><b> 2L5Z</b></a> </td>
    <td>N/A</td>
    <td>2011</td>
    <td>Nucleic Acids Res</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Solution Structure of the Active Site Stem-Loop of the VS Ribozyme</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1TJZ"  target="_blank"   ><b> 1TJZ</b></a> </td>
    <td>N/A</td>
    <td>2004</td>
    <td>J Mol Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR Structure of the Active Conformation of the VS Ribozyme Cleavage Site</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1OW9"  target="_blank"   ><b> 1OW9</b></a> </td>
    <td>N/A</td>
    <td>2003</td>
    <td>PNAS</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR Localization of Divalent Cations at the Active Site of the Neurospora VS Ribozyme Provides Insights Into RNA-Metal Ion Interactions</td>
    <td>Neurospora</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2MIS"  target="_blank"   ><b> 2MIS</b></a> </td>
    <td>N/A</td>
    <td>2014</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the II-III-VI three-way junction from the VS ribozyme</td>
    <td>synthetic construct</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2N3Q"  target="_blank"   ><b> 2N3Q</b></a> </td>
    <td>N/A</td>
    <td>2015</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Solution structure of the vs ribozyme substrate stem-loop</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1HWQ"  target="_blank"   ><b> 1HWQ</b></a> </td>
    <td>N/A</td>
    <td>2001</td>
    <td>J Mol Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the II-III-VI three-way junction from the VS ribozyme and identification of magnesium-binding sites using paramagnetic relaxation enhancement</td>
    <td>Neurospora crassa</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2N3R"  target="_blank"   ><b> 2N3R</b></a> </td>
    <td>N/A</td>
    <td>2015</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Solution structure of the VS ribozyme stem-loop V in the presence of MgCl2</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1YN1"  target="_blank"   ><b> 1YN1</b></a> </td>
    <td>N/A</td>
    <td>2006</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>Solution structure of the Neurospora VS ribozyme stem-loop V in the presence of MgCl2 with modeling of bound manganese ions</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1YN2"  target="_blank"   ><b> 1YN2</b></a> </td>
    <td>N/A</td>
    <td>2006</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the VS ribozyme stem-loop V RNA in the absence of multivalent ions.</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1TBK"  target="_blank"   ><b> 1TBK</b></a> </td>
    <td>N/A</td>
    <td>2005</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the III-IV-V three-way junction from the VS ribozyme</td>
    <td>Neurospora crassa</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2MTJ"  target="_blank"   ><b> 2MTJ</b></a> </td>
    <td>N/A</td>
    <td>2014</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the III-IV-V three-way junction from the VS ribozyme and identification of magnesium-binding sites using paramagnetic relaxation enhancement</td>
    <td>Neurospora crassa</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2MTK"  target="_blank"   ><b> 2MTK</b></a> </td>
    <td>N/A</td>
    <td>2014</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/VS-ribozyme.html"  target="_blank"   ><b> VS</b></a> </td>
    <td>NMR structure of the I-V kissing-loop interaction of the Neurospora VS ribozyme</td>
    <td>Neurospora crassa</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/2MI0"  target="_blank"   ><b> 2MI0</b></a> </td>
    <td>N/A</td>
    <td>2014</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Pre-cleavage state of glmS ribozyme bound to glucose-6-phosphate</td>
    <td>Thermoanaerobacter tengcongensis</td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2HO7"  target="_blank"   ><b> 2HO7</b></a> </td>
    <td>2.9</td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Post-cleavage state of glmS ribozyme</td>
    <td>Thermoanaerobacter tengcongensis </td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2GCV"  target="_blank"   ><b> 2GCV</b></a> </td>
    <td>2.1</td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Structural investigation of the GlmS ribozyme bound to its catalytic cofactor</td>
    <td>Bacillus anthracis</td>
    <td> SIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2NZ4"  target="_blank"   ><b> 2NZ4</b></a> </td>
    <td>2.5</td>
    <td>2007</td>
    <td>Chemistry &amp; biology</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Pre-cleavage state of glmS ribozyme</td>
    <td>Thermoanaerobacter tengcongensis </td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2GCS"  target="_blank"   ><b> 2GCS</b></a> </td>
    <td>2.1</td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Pre-cleavage state of glmS ribozyme</td>
    <td> Thermoanaerobacter tengcongensis </td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2H0X"  target="_blank"   ><b> 2H0X</b></a> </td>
    <td>2.3 </td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Post-cleavage state of glmS ribozyme</td>
    <td>Thermoanaerobacter tengcongensis</td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2H0W"  target="_blank"   ><b> 2H0W</b></a> </td>
    <td>2.4</td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/glms.html"  target="_blank"   ><b> glmS </b></a> </td>
    <td>Post-cleavage state of glmS ribozyme</td>
    <td>Thermoanaerobacter tengcongensis</td>
    <td>MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2HO6"  target="_blank"   ><b> 2HO6</b></a> </td>
    <td>2.8</td>
    <td>2006</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>Crystal Structure of the Twister Ribozyme with the Nucleotide 5'- to the Cleavage Site</td>
    <td>N/A</td>
    <td>MAD+SIRAS-Cs/Sm</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4QJH"  target="_blank"   ><b> 4QJH</b></a> </td>
    <td>3.88</td>
    <td>2014</td>
    <td>Proc Natl Acad Sci U S A</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>Crystal Structure of Twister with the Nucleotide 5'- to the Cleavage Site</td>
    <td>N/A</td>
    <td>MR+SIR-Ir/Co</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4QJD"  target="_blank"   ><b> 4QJD</b></a> </td>
    <td>3.1</td>
    <td>2014</td>
    <td>Proc Natl Acad Sci U S A</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>Crystal structure of the in-line aligned env22 twister ribozyme</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4RGE"  target="_blank"   ><b> 4RGE</b></a> </td>
    <td>2.89</td>
    <td>2014</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>Crystal structure of the in-line aligned env22 twister ribozyme soaked with Mn2+</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4RGF"  target="_blank"   ><b> 4RGF</b></a> </td>
    <td>3.2</td>
    <td>2014</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>The crystal structure of OMe substituted twister ribozyme</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5DUN"  target="_blank"   ><b> 5DUN</b></a> </td>
    <td>2.64</td>
    <td>2015</td>
    <td>Angew Chem Int Ed Engl</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister.html"  target="_blank"   ><b> Twister</b></a> </td>
    <td>Crystal Structure of Twister Ribozyme</td>
    <td>N/A</td>
    <td>Br-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4OJI"  target="_blank"   ><b> 4OJI</b></a> </td>
    <td>2.3</td>
    <td>2014</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister-sister.html"  target="_blank"   ><b> Twister-sister</b></a> </td>
    <td>Structure-based Insights into Self-Cleavage by a Four-way Junctional Twister-Sister Ribozyme</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5Y87"  target="_blank"   ><b> 5Y87</b></a> </td>
    <td>2.13</td>
    <td>2017</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister-sister.html"  target="_blank"   ><b> Twister-sister</b></a> </td>
    <td>Structure-based Insights into Self-Cleavage by a Four-way Junctional Twister-Sister Ribozyme</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5Y85"  target="_blank"   ><b> 5Y85</b></a> </td>
    <td>2</td>
    <td>2017</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/twister-sister.html"  target="_blank"   ><b> Twister-sister</b></a> </td>
    <td>Crystal Structure of the Twister Sister (TS) Ribozyme at 2.0 Angstrom</td>
    <td>N/A</td>
    <td>Br-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5T5A"  target="_blank"   ><b> 5T5A</b></a> </td>
    <td>2</td>
    <td>2017</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hatchet.html"  target="_blank"   ><b> Hatchet</b></a> </td>
    <td>The structure of Hatchet Ribozyme</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6JQ5"  target="_blank"   ><b> 6JQ5</b></a> </td>
    <td>2</td>
    <td>2019</td>
    <td>Proc Natl Acad Sci USA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Hatchet.html"  target="_blank"   ><b> Hatchet</b></a> </td>
    <td>Hatchet Ribozyme Structure soaking with Ir(NH3)6+</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6JQ6"  target="_blank"   ><b> 6JQ6</b></a> </td>
    <td>2.63</td>
    <td>2019</td>
    <td>Proc Natl Acad Sci USA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>The native structure of native pistol ribozyme</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5K7C"  target="_blank"   ><b> 5K7C</b></a> </td>
    <td>2.7</td>
    <td>2016</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>The structure of native pistol ribozyme, bound to Iridium</td>
    <td>N/A</td>
    <td>Ir-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5K7D"  target="_blank"   ><b> 5K7D</b></a> </td>
    <td>2.68</td>
    <td>2016</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>The structure of pistol ribozyme, soaked with Mn2+</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5K7E"  target="_blank"   ><b> 5K7E</b></a> </td>
    <td>3.27</td>
    <td>2016</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>Crystal structure of Pistol, a class of self-cleaving ribozyme</td>
    <td>N/A</td>
    <td>Sm-MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5KTJ"  target="_blank"   ><b> 5KTJ</b></a> </td>
    <td>2.97</td>
    <td>2017</td>
    <td>Proc Natl Acad Sci USA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>The structure of pistol ribozyme bound to magnesium</td>
    <td>N/A</td>
    <td>Br-SAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6R47"  target="_blank"   ><b> 6R47</b></a> </td>
    <td>3.1</td>
    <td>2019</td>
    <td>J Am Chem Soc</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>Pistol ribozyme transition-state analog vanadate</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6UEY"  target="_blank"   ><b> 6UEY</b></a> </td>
    <td>2.8</td>
    <td>2020</td>
    <td>Angew Chem Int Ed Engl</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>Pistol ribozyme product crystal structure</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6UFJ"  target="_blank"   ><b> 6UFJ</b></a> </td>
    <td>2.6</td>
    <td>2020</td>
    <td>Angew Chem Int Ed Engl</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>Pistol ribozyme transition-state analog vanadate</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6UF1"  target="_blank"   ><b> 6UF1</b></a> </td>
    <td>3.1</td>
    <td>2020</td>
    <td>Angew Chem Int Ed Engl</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/Pistol.html"  target="_blank"   ><b> Pistol</b></a> </td>
    <td>Pistol ribozyme transition-state analog vanadate</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6UFK"  target="_blank"   ><b> 6UFK</b></a> </td>
    <td>3.1</td>
    <td>2020</td>
    <td>Angew Chem Int Ed Engl</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Crystal structure of a self-splicing group Ⅰ intron with both exons</td>
    <td>Homo sapiens</td>
    <td>SIRAS；SAD；MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1U6B"  target="_blank"   ><b> 1U6B</b></a> </td>
    <td>3.1</td>
    <td>2004</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Structure of the Tetrahymena Ribozyme: Base Triple Sandwich and Metal Ion at the Active Site</td>
    <td>N/A</td>
    <td>SAD-Ir；MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1X8W"  target="_blank"   ><b> 1X8W</b></a> </td>
    <td>3.8</td>
    <td>2004</td>
    <td>Mol Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Crystal structure of an active group I ribozyme-product complex</td>
    <td>Staphylococcus virus Twort</td>
    <td>MIR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1Y0Q"  target="_blank"   ><b> 1Y0Q</b></a> </td>
    <td>3.6</td>
    <td>2005</td>
    <td>Nat Struct Mol Biol</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Crystal structure of a group I intron/two exon complex that includes all catalytic metal ion ligands.</td>
    <td>Homo sapiens</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1ZZN"  target="_blank"   ><b> 1ZZN</b></a> </td>
    <td>3.37</td>
    <td>2005</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Apo L-21 ScaI Tetrahymena ribozyme</td>
    <td>Tetrahymena thermophila</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/7EZ0"  target="_blank"   ><b> 7EZ0</b></a> </td>
    <td>3.14</td>
    <td>2021</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Crystal Structure of a Mutant (C109G,G212C) P4-P6 Domain of the Group I Intron from Tetrahymena Thermophilia</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1L8V"  target="_blank"   ><b> 1L8V</b></a> </td>
    <td>2.8</td>
    <td>2002</td>
    <td>Proc Natl Acad Sci U S A</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>J4/5 Loop from the Candida albicans and Candida dubliniensis Group I Introns</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/1TUT"  target="_blank"   ><b> 1TUT</b></a> </td>
    <td>N/A</td>
    <td>2004</td>
    <td>Biochemistry</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Group I self-splicing intron P4-P6 domain mutant U131A (with isopropanol soaking)</td>
    <td>Tetrahymena thermophila</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6BJX"  target="_blank"   ><b> 6BJX</b></a> </td>
    <td>3.14</td>
    <td>2018</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Group I self-splicing intron P4-P6 domain mutant U131A (without isopropanol soaking)</td>
    <td>Tetrahymena thermophila</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6D8L"  target="_blank"   ><b> 6D8L</b></a> </td>
    <td>3.14</td>
    <td>2018</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Group I self-splicing intron P4-P6 domain mutant A125U/G126U</td>
    <td>Tetrahymena thermophila</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6D8M"  target="_blank"   ><b> 6D8M</b></a> </td>
    <td>3.7</td>
    <td>2018</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Jak1 with compound 23</td>
    <td>Homo sapiens</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6DBN"  target="_blank"   ><b> 6DBN</b></a> </td>
    <td>2.48</td>
    <td>2019</td>
    <td>J Med Chem</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupI.html"  target="_blank"   ><b> Group I self-splicing intron</b></a> </td>
    <td>Group I self-splicing intron P4-P6 domain mutant A230U</td>
    <td>Tetrahymena thermophila</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6D8O"  target="_blank"   ><b> 6D8O</b></a> </td>
    <td>2.8</td>
    <td>2018</td>
    <td>Structure</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/LC-ribozyme.html"  target="_blank"   ><b> Lariat capping ribozyme</b></a> </td>
    <td>Speciation of a group I intron into a lariat capping ribozyme</td>
    <td>Didymium iridis</td>
    <td>MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4P8Z"  target="_blank"   ><b> 4P8Z</b></a> </td>
    <td>3.85</td>
    <td>2014</td>
    <td>PNAS</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/LC-ribozyme.html"  target="_blank"   ><b> Lariat capping ribozyme</b></a> </td>
    <td>Speciation of a group I intron into a lariat capping ribozyme (Circularly permutated ribozyme)</td>
    <td>Didymium iridis</td>
    <td>MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4P95"  target="_blank"   ><b> 4P95</b></a> </td>
    <td>2.5</td>
    <td>2014</td>
    <td>PNAS</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/LC-ribozyme.html"  target="_blank"   ><b> Lariat capping ribozyme</b></a> </td>
    <td>peciation of a group I intron into a lariat capping ribozyme (Heavy atom derivative)</td>
    <td>Didymium iridis</td>
    <td>MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4P9R"  target="_blank"   ><b> 4P9R</b></a> </td>
    <td>2.7</td>
    <td>2014</td>
    <td>PNAS</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/LC-ribozyme.html"  target="_blank"   ><b> Lariat capping ribozyme</b></a> </td>
    <td>Lariat-capping ribozyme (circular permutation form)</td>
    <td>Didymium iridis</td>
    <td>MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6GYV"  target="_blank"   ><b> 6GYV</b></a> </td>
    <td>2.5</td>
    <td>2014</td>
    <td>PNAS</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/LC-ribozyme.html"  target="_blank"   ><b> Lariat capping ribozyme</b></a> </td>
    <td>Lariat-capping ribozyme with a shortened DP2 stem loop</td>
    <td>Didymium iridis</td>
    <td>MAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6G7Z"  target="_blank"   ><b> 6G7Z</b></a> </td>
    <td>3.3</td>
    <td>2019</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Crystal Structure of a RNA Molecule Containing Domain 5 and 6 of the Yeast ai5g Group II Self-splicing Intron</td>
    <td>N/A</td>
    <td>MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1KXK"  target="_blank"   ><b> 1KXK</b></a> </td>
    <td>3</td>
    <td>2002</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Crystal structure of a self-spliced group II intron</td>
    <td>N/A</td>
    <td>MAD-Yb&amp;Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3BWP"  target="_blank"   ><b> 3BWP</b></a> </td>
    <td>3.1</td>
    <td>2008</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Tertiary Architecture of the Oceanobacillus Iheyensis Group II Intron</td>
    <td>N/A</td>
    <td>N/A</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3IGI"  target="_blank"   ><b> 3IGI</b></a> </td>
    <td>3.125</td>
    <td>2009</td>
    <td>RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Crystal structure of a eukaryotic group II intron lariat</td>
    <td>Pylaiella littoralis</td>
    <td>MAD</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4R0D"  target="_blank"   ><b> 4R0D</b></a> </td>
    <td>3.676</td>
    <td>2014</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Structure of Oceanobacillus iheyensis group II intron in a ligand-free state in the presence of Tl+ and Mg2+</td>
    <td>Oceanobacillus iheyensis</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4E8Q"  target="_blank"   ><b> 4E8Q</b></a> </td>
    <td>2.84</td>
    <td>2012</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Oceanobacillus iheyensis group II intron domain 1 with iridium hexamine</td>
    <td>Oceanobacillus iheyensis HTE831</td>
    <td>SAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4Y1N"  target="_blank"   ><b> 4Y1N</b></a> </td>
    <td>3</td>
    <td>2015</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Oceanobacillus iheyensis group II intron domain 1</td>
    <td>Oceanobacillus iheyensis HTE831</td>
    <td>SAD-Ir</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/4Y1O"  target="_blank"   ><b> 4Y1O</b></a> </td>
    <td>2.95</td>
    <td>2015</td>
    <td>Nat Chem Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Structure of the lariat form of a chimeric derivative of the Oceanobacillus iheyensis group II intron in the presence of NH4+ and MG2+.</td>
    <td>Oceanobacillus iheyensis</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5J01"  target="_blank"   ><b> 5J01</b></a> </td>
    <td>3.39</td>
    <td>2016</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Structure a of Group II Intron Complexed with its Reverse Transcriptase</td>
    <td>Lactococcus lactis</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/5G2Y"  target="_blank"   ><b> 5G2Y</b></a> </td>
    <td>4.5</td>
    <td>2016</td>
    <td>Nat Struct Mol Biol </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Structure of the lariat form of a chimeric derivative of the Oceanobacillus iheyensis group II intron in the presence of NH4+, MG2+ and an inactive 5' exon.</td>
    <td>Oceanobacillus iheyensis</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/5J02"  target="_blank"   ><b> 5J02</b></a> </td>
    <td>3.493</td>
    <td>2016</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Specific phosphorothioate substitution within domain 6 of a group II intron ribozyme leads to changes in local structure and metal ion binding</td>
    <td>Saccharomyces cerevisiae</td>
    <td>N/A</td>
    <td>NMR</td>
    <td><a href="https://www.rcsb.org/structure/6EZ0"  target="_blank"   ><b> 6EZ0</b></a> </td>
    <td>N/A</td>
    <td>2018</td>
    <td>J Biol Inorg Chem</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/groupII.html"  target="_blank"   ><b> Group II self-splicing intron</b></a> </td>
    <td>Structure of a group II intron retroelement after DNA integration</td>
    <td>Thermosynechococcus vestitus ,Thermosynechococcus vestitus BP-1</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6MEC"  target="_blank"   ><b> 6MEC</b></a> </td>
    <td>3.6</td>
    <td>2019</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>RNase P protein from Bacillus subtilis</td>
    <td>Bacillus subtilis</td>
    <td>MIR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1A6F"  target="_blank"   ><b> 1A6F</b></a> </td>
    <td>2.6</td>
    <td>1998</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>RNase P protein from Thermotoga maritima</td>
    <td>Thermotoga maritima</td>
    <td>SAD-Se</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1NZ0"  target="_blank"   ><b> 1NZ0</b></a> </td>
    <td>1.2</td>
    <td>2003</td>
    <td>Proc Natl Acad Sci U S A</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Crystal structure of the specificity domain of Ribonuclease P RNA</td>
    <td> Bacillus subtilis</td>
    <td>MAD-Pb</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1NBS"  target="_blank"   ><b> 1NBS</b></a> </td>
    <td>3.15</td>
    <td>2003</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Crystal structure of the specificity domain of Ribonuclease P of the A-type</td>
    <td>N/A</td>
    <td>SAD-Ba</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/1U9S"  target="_blank"   ><b> 1U9S</b></a> </td>
    <td>2.9</td>
    <td>2004</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Crystal structure of the RNA subunit of Ribonuclease P. Bacterial A-type</td>
    <td>N/A</td>
    <td>SIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2A2E"  target="_blank"   ><b> 2A2E</b></a> </td>
    <td>3.85</td>
    <td>2005</td>
    <td>Nature </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Crystal Structure of Bacterial Ribonuclease P RNA</td>
    <td>N/A</td>
    <td>MAD-Os</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2A64"  target="_blank"   ><b> 2A64</b></a> </td>
    <td>3.3</td>
    <td>2005</td>
    <td>Proc Natl Acad Sci U S A</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Mapping metal-binding sites in the catalytic domain of bacterial RNase P RNA</td>
    <td>N/A</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3DHS"  target="_blank"   ><b> 3DHS</b></a> </td>
    <td>3.6</td>
    <td>2009</td>
    <td> RNA</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Structure of a Bacterial Ribonuclease P Holoenzyme in Complex with tRNA</td>
    <td>Thermotoga maritima</td>
    <td>MR / MAD / MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3Q1Q"  target="_blank"   ><b> 3Q1Q</b></a> </td>
    <td>3.8</td>
    <td>2010</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Bacterial RNase P</b></a> </td>
    <td>Crystal structure of a bacterial RNase P holoenzyme in complex with TRNA and in the presence of 5' leader</td>
    <td>Thermotoga maritima</td>
    <td>MR / MAD / MIRAS</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/3Q1R"  target="_blank"   ><b> 3Q1R</b></a> </td>
    <td>4.2</td>
    <td>2010</td>
    <td>Nature</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Archaeal  RNase P</b></a> </td>
    <td>Crystal structure analysis of protein component Ph1496p of P.horikoshii ribonuclease P</td>
    <td>Pyrococcus horikoshii</td>
    <td>MR</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/2CZW"  target="_blank"   ><b> 2CZW</b></a> </td>
    <td>1.9 </td>
    <td>2006</td>
    <td>Biochem Biophys Res Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Archaeal  RNase P</b></a> </td>
    <td>cryo-EM structure of an archaeal Ribonuclease P</td>
    <td>Methanocaldococcus jannaschii DSM 2661, Methanocaldococcus jannaschii</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6K0A"  target="_blank"   ><b> 6K0A</b></a> </td>
    <td>4.6</td>
    <td>2019</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Archaeal  RNase P</b></a> </td>
    <td>cryo-EM structure of archaeal Ribonuclease P with mature tRNA</td>
    <td>Methanocaldococcus jannaschii DSM 2661, Escherichia coli, Methanocaldococcus jannaschii</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6K0B"  target="_blank"   ><b> 6K0B</b></a> </td>
    <td>4.3</td>
    <td>2019</td>
    <td>Nat Commun</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Nuclear RNase P</b></a> </td>
    <td>Cryo-EM structure of yeast Ribonuclease P</td>
    <td>Saccharomyces cerevisiae S288C</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6AGB"  target="_blank"   ><b> 6AGB</b></a> </td>
    <td>3.5</td>
    <td>2018</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Nuclear RNase P</b></a> </td>
    <td>Cryo-EM structure of yeast Ribonuclease P with pre-tRNA substrate</td>
    <td>Saccharomyces cerevisiae S288C</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6AH3"  target="_blank"   ><b> 6AH3</b></a> </td>
    <td>3.48</td>
    <td>2018</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Nuclear RNase P</b></a> </td>
    <td>Cryo-EM structure of human Ribonuclease P</td>
    <td>Homo sapiens</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6AHR"  target="_blank"   ><b> 6AHR</b></a> </td>
    <td>3.9</td>
    <td>2018</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Nuclear RNase P</b></a> </td>
    <td>Cryo-EM structure of human Ribonuclease P with mature tRNA</td>
    <td>Homo sapiens</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6AHU"  target="_blank"   ><b> 6AHU</b></a> </td>
    <td>3.66</td>
    <td>2018</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> Nuclear RNase P</b></a> </td>
    <td>Crystal structure of human RPP40</td>
    <td>Homo sapiens</td>
    <td>SAD-Se</td>
    <td>X-ray diffraction</td>
    <td><a href="https://www.rcsb.org/structure/6AHV"  target="_blank"   ><b> 6AHV</b></a> </td>
    <td>2.6</td>
    <td>2018</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> RNase MRP</b></a> </td>
    <td>Structure of yeast RNase MRP holoenzyme</td>
    <td>Saccharomyces cerevisiae S288C</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/6W6V"  target="_blank"   ><b> 6W6V</b></a> </td>
    <td>3</td>
    <td>2020</td>
    <td>Nat Commun </td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> RNase MRP</b></a> </td>
    <td>Cryo-EM structure of yeast Ribonuclease MRP</td>
    <td>Saccharomyces cerevisiae S288C</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/7C79"  target="_blank"   ><b> 7C79</b></a> </td>
    <td>2.5</td>
    <td>2020</td>
    <td>Science</td>
  </tr>
  <tr>
    <td><a href="https://www.ribocentre.org/docs/RNaseP.html"  target="_blank"   ><b> RNase MRP</b></a> </td>
    <td>Cryo-EM structure of yeast Ribonuclease MRP with substrate ITS1</td>
    <td>Saccharomyces cerevisiae S288C, Saccharomyces cerevisiae</td>
    <td>N/A</td>
    <td>Electron microscopy</td>
    <td><a href="https://www.rcsb.org/structure/7C7A"  target="_blank"   ><b> 7C7A</b></a> </td>
    <td>2.8</td>
    <td>2020</td>
    <td>Science</td>
  </tr>
          </table>
    </div>
</body>
</html>
<br><br>



<!--<table id="table_id" class="table table-striped table-bordered" cellspacing="0" width="100%">
   <thead>
      <tr>
        <th>Ribozyme Name</th>
        <th>Structures Available</th>
       	<th>Reaction</th>
      </tr>
   </thead>
   <tbody>
     <tr>
       <td><a href="/DNAmoreDB/dnazyme/256/">VS-ribozyme*</a></td>
       <td>
                <a href="/DNAmoreDB/structure/7/">1HWQ,</a>
                <a href="/DNAmoreDB/structure/6/">4R4V,</a>
                <a href="/DNAmoreDB/structure/5/">5V3I.</a>
           </td>
       <td>RNA ligation</td>
     </tr>
     <tr>
       <td><a href="/DNAmoreDB/dnazyme/444/">twister</a></td>
       <td>
                <a href="/DNAmoreDB/structure/7/">4RGE,</a>
                <a href="/DNAmoreDB/structure/6/">4RGF,</a>
                <a href="/DNAmoreDB/structure/5/">4OJI,</a>
                <a href="/DNAmoreDB/structure/5/">4QJH,</a>
                <a href="/DNAmoreDB/structure/5/">4QJD,</a>
                <a href="/DNAmoreDB/structure/7/">5DUN.</a>
           </td>
       <td>RNA cleavage</td>
     </tr>
     <tr>
       <td><a href="/DNAmoreDB/dnazyme/445/">10-23</a></td>
       <td>
                <a href="/DNAmoreDB/structure/8/">1BR3,</a>
                <a href="/DNAmoreDB/structure/9/">1EGK.</a>
           </td>
       <td>RNA cleavage</td>
     </tr>
   
   </tbody>
</table>-->



