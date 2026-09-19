---
layout: about
title: About
permalink: /
subtitle: <a href='#'>Democratizing AI for pervasive applications.</a>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: <p>50 Nanyang Avenue</p>
    <p>Singapore 639798</p>

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

I am a Nanyang Assistant Professor at School of Electrical and Electronic Engineering, Nanyang Technological University, Singapore.
Previously, I was a Lecturer at ETH Z&uuml;rich, where I worked with
[Prof. Luca Benini](https://scholar.google.com/citations?user=8riq3sYAAAAJ&hl=en).
I also collaborated with
[Prof. Radu Timofte](https://www.informatik.uni-wuerzburg.de/computervision/),
[Dr. Michele Magno](https://scholar.google.com/citations?user=ytj7UUcAAAAJ&hl=en&oi=ao),
and [Prof. Ming-Hsuan Yang](https://scholar.google.com/citations?user=p9-ohHsAAAAJ&hl=en).
I got my PhD degree from the Computer Vision Lab supervised by [Prof. Luc Van Gool](https://scholar.google.com/citations?user=TwMib_QAAAAJ&hl=en). During my PhD, I was mentored by [Babak Ehteshami Bejnordi](https://babakint.github.io/), [Tijmen Blankevoort](https://scholar.google.com/citations?user=OGEyrG8AAAAJ&hl=en), and [Amir Habibian](https://habibian.github.io/) at Qualcomm and Rakesh Ranjan at Meta. After my graduation, I worked as a Postdoc at CVL, and part-time at Meta.


<!-- My research focuses on AI efficiency, aiming to accelerate computing, reduce memory footprint, and curb power consumption of AI systems. This is a facinating area that drives AI applications, be it on the cloud or on the edge. To solve this problem, we need to delve into the system stack, trying to understand multiple basic units (input modality, model, computation mechanism, mapping, and hardware specs). By joint optimization with multiple techniques or on multiple levels, extreme computational efficiency can be achieved.  -->

My research focuses on AI efficiency, aiming to accelerate computation, reduce memory footprint, and mitigate power consumption in AI systems. This is a fascinating area that drives AI applications across both cloud and edge environments. Addressing this challenge requires delving into the system stack to understand its fundamental units, from input modalities, models, computation mechanisms, mappings to hardware specifications. Through joint optimization across techniques and layers, it becomes possible to achieve extreme computational efficiency.

My research spans the AI system stack. The common thread is that efficiency is rarely won at a single layer, the largest gains come from evovling the algorithm and the hardware that runs it together.

- **Computationally efficient model design:** what is the right computational mechanism for a given architecture? I have studied this for [CNNs](../assets/pdf/2019_iccv_sgn.pdf), [graph neural networks](../assets/pdf/2021_iccv_efficient_gcn.pdf), vision Transformers ([LocalViT](../assets/pdf/2023_iros_localvit.pdf), [GRL](../assets/pdf/2023_cvpr_grl.pdf), [SemanIR](../assets/pdf/2024_neurips_semanir.pdf), [VRT](../assets/pdf/2024_tip_vrt.pdf)), and state-space models ([MambaIR](../assets/pdf/2025_cvpr_mambairv2.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf)).
- **Model compression and deployment:** how much of a trained model is actually needed? My work spans weight pruning ([group sparsity](../assets/pdf/2020_cvpr_group_sparsity.pdf), [random pruning](../assets/pdf/2022_cvpr_random_pruning.pdf), [DHP](../assets/pdf/2020_eccv_dhp.pdf)), token pruning ([FastVAR](../assets/pdf/2025_iccv_fastvar.pdf)), quantization ([SliM-LLM](../assets/pdf/2025_icml_slim-llm.pdf), [OBR](../assets/pdf/2026_iclr_obr.pdf)), tensor decomposition ([learning filter basis](../assets/pdf/2019_iccv_filter_basis.pdf)), and low-rank adaptation ([IntLoRA](../assets/pdf/2025_icml_intlora.pdf)), applied to LLMs and diffusion models.
- **Software–hardware co-design:** once the model is fixed, the bottleneck moves to how it is mapped onto silicon. I work on serving modern models efficiently both on large clusters ([FlatAttention](../assets/pdf/2025_isvlsi_flatattention.pdf)) and on severely constrained edge devices ([smart glasses](../assets/pdf/2024_eccv_smart_glasses.pdf), [Retina](../assets/pdf/2024_cvpr_retina.pdf), [TinyTracker](../assets/pdf/2023_sensors_TinyTracker.pdf)).
<!-- - **Software–hardware co-design for robotics:** vision-language-action (VLA) models and world models are the most demanding embodied workloads we have. A VLA forward pass takes tens to hundreds of milliseconds, while whole-body control needs commands at kilohertz. This is a gap of two to three orders of magnitude that no single layer of the stack can close. How this problem  -->
<!-- I am building a programme that attacks it jointly: memory-centric models that adapt online, compression and kernel-level optimization shaped around reasoning workloads, and RISC-V architectures with 3D heterogeneous integration designed around the resulting dataflow. -->
- **Foundation models for biosignals:** biosignals record physiological activity and underpin healthcare, disease monitoring, BCI, HCI and AR/VR. They demand accurate modelling under a tight on-device compute budget — here efficiency is not an optimization but a precondition. This is my most active recent direction ([PhysioWave](../assets/pdf/2025_neurips_physiowave.pdf), [LUNA](../assets/pdf/2025_neurips_luna.pdf), [WaveFormer](../assets/pdf/2025_ner_waveformer.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf), [CEReBrO](../assets/pdf/2025_embc_finetuning.pdf)).

**I am recruiting PhD students, postdoctoral researchers, and NTU project students (FYP, URECA, MSc by Dissertation) at the School of Electrical and Electronic Engineering, Nanyang Technological University (NTU), Singapore.** The lab works on AI efficiency across the full stack, from algorithms down to silicon. The first direction cuts across the other three:

- <span style="color: red;">**Embodied AI Systems**</span>: software–hardware co-design for robotics — VLAs, world models, and the memory, compression and architecture work needed to run them within real latency and power budgets. People on this direction work across the algorithm–hardware boundary rather than on one side of it.
- <span style="color: red;">**IC Design & EDA**</span>: open-source processor and AI accelerator architectures based on RISC-V, as well as EDA methodologies for hardware PPA (Power, Performance, Area) optimization and 3D integration. This is the newest direction in the lab and the one I am building most actively, growing out of my work at ETH Z&uuml;rich with Prof. Luca Benini's group.
- <span style="color: red;">**Algorithm & Software**</span>: efficient AI/ML and robotics algorithms, leveraging model acceleration techniques to improve the training and inference efficiency of LLMs, VLMs, and VLAs.
- <span style="color: red;">**Biosignal Foundation Models**</span>: accurate and efficient models for EEG, EMG and related physiological signals, and their deployment on wearable devices.

**PhD students:** I am recruiting for the Spring 2027 and Fall 2027 intakes. Admission follows NTU’s standard intake cycle, so please check the application deadline for the intake you are targeting.

**Research fellows and research associates:** these positions are filled on a rolling basis and can start at any time.

**NTU students:** I supervise Final Year Projects, URECA projects, and MSc by Dissertation on a rolling basis. Prior research experience is not expected. Please get in touch a semester before project selection opens.

Salary and benefits follow NTU’s standard policies. Applicants with strong research backgrounds and a genuine interest in advancing frontier technologies are warmly welcome to apply. <span style="color: darkred;">**Please submit your application via <a href="https://statuesque-panda-925.notion.site/3c1756d4d37b4ada9681e1c62c37ebd7?pvs=105" style="color: darkred; text-decoration: underline;">THIS LINK</a>**</span>

<!-- - [Senior Research Fellow on IC Design and EDA](https://ntu.wd3.myworkdayjobs.com/Careers/job/NTU-Main-Campus-Singapore/Senior-Research-Fellow--IC-Design-and-EDA-_R00023418)
- [Research Fellow on IC Design and EDA](https://ntu.wd3.myworkdayjobs.com/Careers/job/NTU-Main-Campus-Singapore/Research-Fellow--IC-Design-and-EDA-_R00023413)
- [Research Associate on IC Design and EDA](https://ntu.wd3.myworkdayjobs.com/Careers/job/NTU-Main-Campus-Singapore/Research-Associate--IC-Design-and-EDA-_R00023410)
- [Research Fellow on Artificial Intelligence / Machine Learning / Robotics](https://ntu.wd3.myworkdayjobs.com/Careers/job/NTU-Main-Campus-Singapore/Research-Fellow--Artificial-Intelligence---Machine-Learning---Robotics-_R00023423)
- [Research Associate on Artificial Intelligence / Machine Learning / Robotics](https://ntu.wd3.myworkdayjobs.com/Careers/job/NTU-Main-Campus-Singapore/Research-Associate--Artificial-Intelligence---Machine-Learning---Robotics-_R00023421) -->

<!-- efficient deep learning and artificial intelligence algorithms and systems with applications to vision, language, and biosignals. -->
<!-- In particular, I am interested in the following topics: -->

[//]: # "Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder."
[//]: #
[//]: # "Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically."
[//]: #
[//]: # "Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them."
