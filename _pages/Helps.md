---
title: "Ribo centre - Helps"
layout: piclay
excerpt: "Ribo centre -- Helps"
permalink: /Helps/
---

# Help

<br><br>
**Ribocentre is designed to contain comprehensive information of all natural ribozymes. In addition to a brief introduction to ribozymes,on each ribozyme page, you'll see a timeline of vital breakthroughs in ribozyme research,representative structures and the chemical mechanism of this ribozyme. Besides, we provide multiple indexing and searching methods, you can index/search about the publications, structures, catalyses and applications of ribozymes that interest you. Users are welcomed to submit new ribozyme cases or related comments through the submission portal to help us improve our database.**

<br>
**You can find:**
<br><br>

<blockquote>
  <p>Pages</p>
</blockquote>

On <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/">Home</a></font></code> page, we borrow the introduction from wikipedia, hoping you could get some basic concepts of ribozymes.

Clink the Ribozyme name in <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/ribozyme">Ribozymes</a></font></code> page, and it would send ypu to a new page which shows the timeline, structure, cytalytic information and so on of the ribozyme you choosed. We hope you can find all the information available in this database. 

The <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/catalysis">Calalysis</a></font></code>page sums up information from catalytic centres, which is proved by  publicated works and shows classification of the ribozymes.

And on the <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/application">Applications</a></font></code> page, there are two examples displaying the application process of ribozymes in previous researches. This page will be timely updated.

The <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/structure">Structures</a></font></code> page provides more details of ribozymes in different aspects and <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://www.ribocentre.org/publications">Publications</a></font></code> page provide the links of single ribozyme page/structure details/publications.<br><br>



On some pages, we use table-format to show the information of different ribozymes. You can click the <code class="language-plaintext highlighter-rouge"><font color=Gray>header</font></code> to rank the column information. You can use the <code class="language-plaintext highlighter-rouge"><font color=Gray>Search</font></code>to search for the ribozymes, years, and other information. Under the table, you could find how many items we provided in the left. The database also provide the function of  <code class="language-plaintext highlighter-rouge"><font color=Gray>Print</font></code> and download function when you click <code class="language-plaintext highlighter-rouge"><font color=Gray>CSV</font></code> <code class="language-plaintext highlighter-rouge"><font color=Gray>PDF</font></code> to chose the certain file format for your download.


<blockquote>
  <p>Submit</p>
</blockquote>

You are welcomed to send us feedback and updated information and your ideas or suggestions will be greatly valued. We will continue to have our database improved to be fully functional and user-friendly. 

<img src="https://www.ribocentre.org/images/help.png" alt="drawing" style="weight:450px;height:200px;display:block;margin:0 auto;"><br>

**If you have information about new ribozymes, please contact us. Your opinions will be fully considered. Click the <code class="language-plaintext highlighter-rouge"><font color=Gray>Submit</font></code> button to send your suggestions and comments on Google sheet.**
 

The information and contact info ofthe team are under the <code class="language-plaintext highlighter-rouge"><font color=Gray><a href="https://docs.google.com/spreadsheets/d/1dWzCMqP9_fmOxxBxpx6Rc0Ro2Her0YIn-07Rpx7fzEs/edit?usp=sharing"  target="_blank">Submit</a></font></code> section. Here are some examples for you to submit your work or feedback:<br><br>
 
 This is a table of Ribozyme databases .You can comment and have any questions here.
 
 <img src="https://www.ribocentre.org/images/HelpsPic/submit1.png" alt="drawing" style="weight:450px;height:210px;display:block;margin:0 auto;"><br><br>
 This is an example if you want to submit a/some new ribozyme/ribozymes or the latest publication. Please provide us with as much information about the new one as possible. 
 
 <img src="https://www.ribocentre.org/images/HelpsPic/submit2.png" alt="drawing" style="weight:450px;height:200px;display:block;margin:0 auto;"><br><br>
 This is an example for you if you find any mistakes on the web page. Please provide us with detailed information and maybe some advice.
 
 <img src="https://www.ribocentre.org/images/HelpsPic/submit3.png" alt="drawing" style="weight:450px;height:205px;display:block;margin:0 auto;"><br><br>
 

><a href="https://docs.google.com/spreadsheets/d/1dWzCMqP9_fmOxxBxpx6Rc0Ro2Her0YIn-07Rpx7fzEs/edit?usp=sharing" target="_blank"><button>Submit</button></a><br>

<font size="4"><strong>When your feedback is received, we will update the data and inform you as soon as we can.<br>
For large datasets please contact the database team group directly with the submission form we given.</strong></font>

<br><br>

>## Contact us:


### Group Members


***

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}


<!--## Graduate Students-->
{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!-- <br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}

  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}

  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}<br><br>










