---
layout: about
title: About
permalink: /
subtitle: <a href='#'>Democratizing AI for pervasive applications.</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info:
    <p>Gloriastrasse 35, 8092 Z&uuml;rich</p>
    <p>Switzerland</p>
  
#    <p>555 your office number</p>
#    <p>123 your address street</p>
#    <p>Your City, State 12345</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 35 # leave blank to include all the news in the `_news` folder

invited_talks:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
  
latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a Lecturer at ETH Z&uuml;rich. I work with 
[Prof. Luca Benini](https://scholar.google.com/citations?user=8riq3sYAAAAJ&hl=en).
I also collaborate with 
[Prof. Radu Timofte](https://www.informatik.uni-wuerzburg.de/computervision/),
[Dr. Michele Magno](https://scholar.google.com/citations?user=ytj7UUcAAAAJ&hl=en&oi=ao), 
and [Prof. Ming-Hsuan Yang](https://scholar.google.com/citations?user=p9-ohHsAAAAJ&hl=en).
I got my PhD degree from the Computer Vision Lab supervised by [Prof. Luc Van Gool](https://scholar.google.com/citations?user=TwMib_QAAAAJ&hl=en). During my PhD, I was mentored by [Babak Ehteshami Bejnordi](https://babakint.github.io/), [Tijmen Blankevoort](https://scholar.google.com/citations?user=OGEyrG8AAAAJ&hl=en), and [Amir Habibian](https://habibian.github.io/) at Qualcomm and Rakesh Ranjan at Meta. After my graduation, I worked as a Postdoc at CVL, and part-time at Meta. 

---
<!-- My research focuses on AI efficiency, aiming to accelerate computing, reduce memory footprint, and curb power consumption of AI systems. This is a facinating area that drives AI applications, be it on the cloud or on the edge. To solve this problem, we need to delve into the system stack, trying to understand multiple basic units (input modality, model, computation mechanism, mapping, and hardware specs). By joint optimization with multiple techniques or on multiple levels, extreme computational efficiency can be achieved.  -->

My research focuses on AI efficiency, aiming to accelerate computation, reduce memory footprint, and mitigate power consumption in AI systems. This is a fascinating area that drives AI applications across both cloud and edge environments. Addressing this challenge requires delving into the system stack to understand its fundamental units, from input modalities, models, computation mechanisms, mappings to hardware specifications. Through joint optimization across techniques and layers, it becomes possible to achieve extreme computational efficiency.

My research covers the topics on the following levels of AI system stack:

  - **Computational-efficient model design:** My work investigate efficient computational mechnism for [CNNs](../assets/pdf/2019_iccv_sgn.pdf), [graph neural networks](../assets/pdf/2021_iccv_efficient_gcn.pdf), vision Transformers ([LocalViT](../assets/pdf/2023_iros_localvit.pdf), [GRL](../assets/pdf/2023_cvpr_grl.pdf), [SemanIR](../assets/pdf/2024_neurips_semanir.pdf), [VRT](../assets/pdf/2024_tip_vrt.pdf)), and state-space models ([MambaIR](../assets/pdf/2025_cvpr_mambairv2.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf)).
  - **Model compression and deployment:** My work covers multiple model compression methods including model pruning ([group sparsity](../assets/pdf/2020_cvpr_group_sparsity.pdf), [random pruning](../assets/pdf/2022_cvpr_random_pruning.pdf), [DHP](../assets/pdf/2020_eccv_dhp.pdf)) token pruning ([FastVAR](../assets/pdf/2025_iccv_fastvar.pdf)), quantization ([SliM-LLM](../assets/pdf/2025_icml_slim-llm.pdf), [OBR](../assets/pdf/2025_arxiv_obr.pdf)), tensor decomposition([learning filter basis](../assets/pdf/2019_iccv_filter_basis.pdf)), and low-rank adaptation ([IntLoRA](../assets/pdf/2025_icml_intlora.pdf)) methods to compress LLMs and diffusion models.
  - **Software-hardware co-design:** I investigate how to co-design software and hardware to serve modern deep models efficiently on both large clusters ([FlatAttention](../assets/pdf/2025_isvlsi_flatattention.pdf)) and edge devices ([smart glasses](../assets/pdf/2024_eccv_smart_glasses.pdf), [Retina](../assets/pdf/2024_cvpr_retina.pdf), [TinyTracker](2023_sensors_TinyTracker)).
  - **Foundation model for biosignals:** Biosignals capture physiological activities of human beings and find wide applications in healthcare, disease monitoring and detection, BCI, HCI, AR/VR, etc. These applications usually involves efficient on-device computation and accurate modelling capacity. This is an area that I'm interested in recently ([PhysioWave](../assets/pdf/2025_neurips_physiowave.pdf), [LUNA](../assets/pdf/2025_neurips_luna.pdf), [WaveFormer](../assets/pdf/2025_ner_waveformer.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf), [CEReBrO](../assets/pdf/2025_embc_finetuning.pdf)). 

<!-- efficient deep learning and artificial intelligence algorithms and systems with applications to vision, language, and biosignals. -->
<!-- In particular, I am interested in the following topics: -->



[//]: # (Write your biography here. Tell the world about yourself. Link to your favorite [subreddit]&#40;http://reddit.com&#41;. You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.)

[//]: # ()
[//]: # (Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page]&#40;/al-folio/publications/&#41; automatically.)

[//]: # ()
[//]: # (Link to your social media connections, too. This theme is set up to use [Font Awesome icons]&#40;https://fontawesome.com/&#41; and [Academicons]&#40;https://jpswalsh.github.io/academicons/&#41;, like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.)
