---
layout: about
title: About
permalink: /
subtitle: <i>Democratizing AI for pervasive applications.</i>

profile:
  align: left
  image: prof_pic.jpg
  image_circular: true # crops the image to make it circular
  more_info: >
    <p>50 Nanyang Avenue</p>
    <p>Singapore 639798</p>
    <div class="research-motto">
    <p>&ndash; Think big, aim high;</p>
    <p>&ndash; Start small, stay patient;</p>
    <p>&ndash; Never stop, never rush</p>
    </div>

#    <p>555 your office number</p>
#    <p>123 your address street</p>
#    <p>Your City, State 12345</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: false # adds a vertical scroll bar if there are more than 3 news items
  limit: 7 # leave blank to include all the news in the `_news` folder

invited_talks:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

{% include research_motto.liquid %}

I am a Nanyang Assistant Professor at the School of Electrical and Electronic Engineering, Nanyang Technological University (NTU), Singapore, where I lead the [Deep Efficiency Lab](/group/).
Previously, I was a Lecturer and Established Researcher at Integrated Systems Laboratory, ETH Z&uuml;rich, where I worked with [Prof. Luca Benini](https://scholar.google.com/citations?user=8riq3sYAAAAJ&hl=en) on AI accelerators and foundation models.
I got my PhD degree from the Computer Vision Lab at ETH Z&uuml;rich, supervised by [Prof. Luc Van Gool](https://scholar.google.com/citations?user=TwMib_QAAAAJ&hl=en).

<details markdown="1">
<summary>More about my background</summary>

I also collaborated with
[Prof. Radu Timofte](https://www.informatik.uni-wuerzburg.de/computervision/),
[Dr. Michele Magno](https://scholar.google.com/citations?user=ytj7UUcAAAAJ&hl=en&oi=ao),
and [Prof. Ming-Hsuan Yang](https://scholar.google.com/citations?user=p9-ohHsAAAAJ&hl=en).
During my PhD, I was mentored by [Babak Ehteshami Bejnordi](https://babakint.github.io/), [Tijmen Blankevoort](https://scholar.google.com/citations?user=OGEyrG8AAAAJ&hl=en), and [Amir Habibian](https://habibian.github.io/) at Qualcomm and Rakesh Ranjan at Meta. After my graduation, I worked as a Postdoc at CVL, and part-time at Meta.

</details>

{% include hiring_banner.liquid %}

<div style="clear: both"></div>

## Research

My research focuses on AI efficiency: accelerating computation, reducing memory footprint, and mitigating power consumption in AI systems, across both cloud and edge environments.
Efficiency is rarely won at a single layer; the largest gains come from evolving the algorithm and the hardware that runs it together.

{% include research_stack.liquid %}

- <span id="research-models"></span>**Computationally efficient model design:** what is the right computational mechanism for a given architecture? I have studied this for [CNNs](../assets/pdf/2019_iccv_sgn.pdf), [graph neural networks](../assets/pdf/2021_iccv_efficient_gcn.pdf), vision Transformers ([LocalViT](../assets/pdf/2023_iros_localvit.pdf), [GRL](../assets/pdf/2023_cvpr_grl.pdf), [SemanIR](../assets/pdf/2024_neurips_semanir.pdf), [VRT](../assets/pdf/2024_tip_vrt.pdf)), and state-space models ([MambaIR](../assets/pdf/2025_cvpr_mambairv2.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf)).
- <span id="research-compression"></span>**Model compression and deployment:** how much of a trained model is actually needed? My work spans weight pruning ([group sparsity](../assets/pdf/2020_cvpr_group_sparsity.pdf), [random pruning](../assets/pdf/2022_cvpr_random_pruning.pdf), [DHP](../assets/pdf/2020_eccv_dhp.pdf)), token pruning ([FastVAR](../assets/pdf/2025_iccv_fastvar.pdf)), quantization ([SliM-LLM](../assets/pdf/2025_icml_slim-llm.pdf), [OBR](../assets/pdf/2026_iclr_obr.pdf)), tensor decomposition ([learning filter basis](../assets/pdf/2019_iccv_filter_basis.pdf)), and low-rank adaptation ([IntLoRA](../assets/pdf/2025_icml_intlora.pdf)), applied to LLMs and diffusion models.
- <span id="research-codesign"></span>**Software–hardware co-design:** once the model is fixed, the bottleneck moves to how it is mapped onto silicon. I work on serving modern models efficiently both on large clusters ([FlatAttention](../assets/pdf/2025_isvlsi_flatattention.pdf)) and on severely constrained edge devices ([smart glasses](../assets/pdf/2024_eccv_smart_glasses.pdf), [Retina](../assets/pdf/2024_cvpr_retina.pdf), [TinyTracker](../assets/pdf/2023_sensors_TinyTracker.pdf)).
  <!-- - **Software–hardware co-design for robotics:** vision-language-action (VLA) models and world models are the most demanding embodied workloads we have. A VLA forward pass takes tens to hundreds of milliseconds, while whole-body control needs commands at kilohertz. This is a gap of two to three orders of magnitude that no single layer of the stack can close. How this problem  -->
  <!-- I am building a programme that attacks it jointly: memory-centric models that adapt online, compression and kernel-level optimization shaped around reasoning workloads, and RISC-V architectures with 3D heterogeneous integration designed around the resulting dataflow. -->
- <span id="research-hardware"></span>**Hardware architecture and EDA:** open-source processor and AI accelerator architectures based on RISC-V, as well as EDA methodologies for hardware PPA (Power, Performance, Area) optimization and 3D integration. This is the newest direction in the lab, growing out of my work at ETH Z&uuml;rich with Prof. Luca Benini's group.
- **Foundation models for biosignals:** biosignals record physiological activity and underpin healthcare, disease monitoring, BCI, HCI and AR/VR. They demand accurate modelling under a tight on-device compute budget — here efficiency is not an optimization but a precondition. This is my most active recent direction ([PhysioWave](../assets/pdf/2025_neurips_physiowave.pdf), [LUNA](../assets/pdf/2025_neurips_luna.pdf), [WaveFormer](../assets/pdf/2025_ner_waveformer.pdf), [FEMBA](../assets/pdf/2025_embc_femba.pdf), [CEReBrO](../assets/pdf/2025_embc_finetuning.pdf)).
