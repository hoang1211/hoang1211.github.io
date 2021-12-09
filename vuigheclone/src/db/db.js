const films = [
  {
    id: 1,
    name: "Lupin III:Part 6",
    alias: "lupin-3-part-6",
    type: "anime",
    image: "/public/img/lupin3viendancuoicung.jpg",
    src: "https://scontent.cdninstagram.com/v/t66.36240-6/10000000_446307306938247_4348267885366345216_n.mp4?_nc_cat=108&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=a2jG2_N26M8AX89z_HU&rl=1500&vabr=712&_nc_ht=scontent-ams4-1.xx&edm=APRAPSkEAAAA&oh=85d2a59471d95a3b09d576095c1697f9&oe=61B344EE",
  },
  {
    id: 2,
    name: "MIERUKO-CHAN",
    alias: "mieruko-chan",
    type: "anime",
    image: "/public/img/merukochan.jpg",
    src: "https://scontent.cdninstagram.com/v/t66.36240-6/10000000_245663100971561_6976324931003224082_n.mp4?_nc_cat=106&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MzAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=sfAGIMarFKsAX_Zv0qf&rl=1530&vabr=1020&_nc_ht=scontent-amt2-1.xx&edm=APRAPSkEAAAA&oh=a718222ca1fcb06c4bc0410eafc741fa&oe=61B0FA69",
  },
  {
    id: 3,
    name: "SEKAI SAIKOU NO ANSATSUSHA, ISEKAI KIZOKU NI TENSEI SURU",
    alias: "sekai-saikou-no-ansatsusha-isekai-kizoku-ni-tensei-suru",
    type: "anime",
    image: "/public/img/3.jpg",
    src: "https://scontent.cdninstagram.com/v/t66.36240-6/10000000_584804642749586_8513185657339469343_n.mp4?_nc_cat=104&ccb=1-5&_nc_sid=985c63&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJvZXBfaGQifQ%3D%3D&_nc_ohc=ZVTisWw7PR4AX_A3SUZ&rl=1500&vabr=700&_nc_ht=scontent-ams4-1.xx&edm=APRAPSkEAAAA&oh=b110d3b6aa545391290451b76c3e2e05&oe=61B4F336",
  },
  {
    id: 4,
    name: "Sakura",
    alias: "sakugan",
    type: "anime",
    image: "/public/img/4.jpg",
    src: "https://scontent.cdninstagram.com/v/t42.27313-2/10000000_881631105704364_4034083883321529228_n.mp4?_nc_cat=103&vs=5dcd33f23e0191ea&_nc_vs=HBksFQAYJEdJQ1dtQUNzNGVDODFpRURBSXdUZ2h2cjhmczNickZxQUFBRhUAAsgBABUAGCRHSUNXbUFEc1l3dGtILXNBQUtMQm1nNG1WTUk0YnJGcUFBQUYVAgLIAQBLBogScHJvZ3Jlc3NpdmVfcmVjaXBlATENc3Vic2FtcGxlX2ZwcwAQdm1hZl9lbmFibGVfbnN1YgAgbWVhc3VyZV9vcmlnaW5hbF9yZXNvbHV0aW9uX3NzaW0AKGNvbXB1dGVfc3NpbV9vbmx5X2F0X29yaWdpbmFsX3Jlc29sdXRpb24AEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcAAAm0q%2FxguK1jQIVkE4oAkMzGAt2dHNfcHJldmlldxwXQJYwLxqfvncYJ2Rhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2QZHBUAFaC2BAAoElZJREVPX1ZJRVdfUkVRVUVTVBsNiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMNMTYzODk4MTY3MDcxOAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50ATAMb2VtX3JvaV9ub3RlC3Byb2dyZXNzaXZlEW9lbV9yb2lfdXNlcl90aWVyAB5vZW1fcm9pX3ByZWRpY3RlZF93YXRjaF90aW1lX3MBMBZvZW1fcm9pX3JlY2lwZV9iZW5lZml0BTAuMDAwJW9lbV9yb2lfc3RhdGljX2JlbmVmaXRfY29zdF9ldmFsdWF0b3ILcHJvZ3Jlc3NpdmUMb2VtX3ZpZGVvX2lkDzU5MjQ2MDk1ODUwNjgxMxJvZW1fdmlkZW9fYXNzZXRfaWQPNTkyNDYwOTQ4NTA2ODE0FW9lbV92aWRlb19yZXNvdXJjZV9pZA81OTI0NjA5NDUxNzM0ODEcb2VtX3NvdXJjZV92aWRlb19lbmNvZGluZ19pZA8yNTI1MjY5NTY5NzQ5NzQlAhwcHBXw5hcbAVUAAhsBVQACHBUCAAAAFoC6twMAJcQBGweIAXMENzA1MAJjZAoyMDIxLTEyLTA4A3JjYgEwA2FwcAZWaWRlb3MCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCzE0MjAuMTA4MzMzAnRzFXByb2dyZXNzaXZlX2VuY29kaW5ncwA%3D&ccb=1-5&_nc_sid=41a7d5&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCIsInNvdXJjZV9zZWdtZW50X2hhbmRsZSI6bnVsbH0%3D&_nc_ohc=dyiBG3pvwAsAX8L3qhE&_nc_ht=video-ams4-1.xx&edm=APRAPSkEAAAA&oh=cae459e2e8c51f79744e42db3ad4e349&oe=61B2775A&_nc_rid=574ccf6f25854d3",
  },
];
