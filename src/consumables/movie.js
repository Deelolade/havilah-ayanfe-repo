const movie = [
  {
    id: 1,
    title: "The Woman King",
    genre: "action",
    category: 'nollywood',
    rating: 8.5,
    year: 2022,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREScBawaOu0D9o7szVNjlqRjQrJKp1-YB36RjYJOra98Vc4SBgdkQGk_nUchoTwlnYFdEHFw"
  },
  {
    id: 2,
    title: "Extraction II",
    genre: "Action",
    category: 'hollywood',
    rating: 8.2,
    year: 2023,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Xj_WhhZK6xXFsvSHERnaYO2Qv0RseyL9RDqQ2Xr3xhIXK_-x89yO1awALlMDwmFEwBD3LA"
  },
  {
    id: 3,
    title: "Demon Slayer: Mugen Train",
    genre: "Anime",
    category: 'japanese',
    rating: 9.0,
    year: 2020,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmwIwHIkNYW-jdQZksOfNgHDMJ784SyH7CKpGycTudI9fABSEr"
  },
  {
    id: 4,
    title: "Oloture",
    genre: "Drama",
    category:'nollywood',
    rating: 8.0,
    year: 2019,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8tTeyft2-Vzj-tB__2ghdojdAcxfQzKtdr6sAA6-8w4HRb-NM6aLT52U2M5Ff6TbPPvb0Zg"
  },
  {
    id: 5,
    title: "Jujutsu Kaisen 0",
    genre: "Action",
    category:'japanese',
    rating: 8.7,
    year: 2021,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC743iRkUJKUfkPHA6gqpEWYda8Kv9o92PETyCgDKLhr6M7ifgYEbVKi4KDcDYWKErZSg5"
  },
  {
    id: 6,
    title: "Gang of Lagos",
    category:'nollywood',
    genre: "Action",
    rating: 8.3,
    year: 2023,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSLmFvXonLYX2vfTB-l06cRjolbv9STmi094aSaGRnXoBbSJpA0bD4rWIRKXcm3GSo7D7J_A"
  },
  {
    id: 7,
    title: "Inception",
    genre: "Thriller",
    category:'hollywood',
    rating: 9.0,
    year: 2010,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw"
  },
  {
    id: 8,
    title: "Weathering With You",
    genre: "Anime",
    category:'japanese',
    rating: 8.4,
    year: 2019,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSx5tPw_cc--fDzksEpNYYYaPEKeWF_w2wh_m7fuFhtTFlfWhJqtO13q1KAfvNqclxj2I9sw"
  },
  {
    id: 9,
    title: "Black Panther: Wakanda Forever",
    category:'hollywood',
    genre: "Action",
    rating: 8.1,
    year: 2022,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSlYz674WFWJZT1uPziFxijT7SvQ9Ir4TnIUNB524gyCCagwWlkkCX6pJdpI-LJzDaoCqiu"
  },
  {
    id: 10,
    title: "King of Boys: The Return of the King",
    category:'nollywood',
    genre: "Drama",
    rating: 8.8,
    year: 2021,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsuX5Mh5tGd0LgX4RsHXaSWQp98WYh8wZcHGpsRDtT8kGMf9zny88lNYtLNmaYL0FNw3Tjew"
  },
  {
    id: 11,
    title: "John Wick: Chapter 4",
    category:'hollywood',
    genre: "Action",
    rating: 9.1,
    year: 2023,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTBnfgdj6S32yB-VjpwLVnIE4-CHop12_I0ZqWJOEDnMMfhCMPhuQqyMZKwwvP2-wgOhV0bRA"
  },
  {
    id: 12,
    title: "Arcane",
    genre: "Anime",
    category: "japanese",
    rating: 9.4,
    year: 2021,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDAwNU_4d1MjmGSdMlbJhYXdaqnd9cWWg7WqrTh-d6G2DxOCmKBncQZ34LvniBPNeR2IZ"
  },
  {
    id: 13,
    title: "Blood Sisters",
    genre: "Thriller",
    category: "Nollywood",
    rating: 8.0,
    year: 2022,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSALwtGKBR6q7fNY2xjcg3RPNmLxPNVd3HzowdRnkMxwZOKFGmPT64ymI-3fLH0XdXK_XEM4Q"
  },
  {
    id: 14,
    title: "Attack on Titan: Final Season",
    genre: "Anime",
    category: "japanese",
    rating: 9.6,
    year: 2023,
    imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYBZ3cOwOlS2adzqmPfbQj9opS_NJZ-M2NCMcfVBrTXyt9ZwjMnbcB2jIP9yRDK02VVrxrlQHDpEeXGQQDdhH5BimnqJp8B2azeYgq7zs-"
  },
  {
    id: 15,
    title: "Fast X",
    category:"hollywood",
    genre: "Action",
    rating: 7.5,
    year: 2023,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQanLn4C93_fZCHLoMmGhQHJLjM4eHbhN23Eu8OpF7-8wDqBw2ehb_TvjAknVD-8NvtqAinXw"
  },
  {
    id: 16,
    title: "Smile",
    genre: "Thriller ",
    category:"hollywood",
    rating: 7.8,
    year: 2022,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrFHPffbf0jjiUsvr66kKRDV8HwkxRlBRxq5JAKleAlagEupteeJwvvQbVumI-_m_yev-5"
  },
  {
    id: 17,
    title: "The Black Book",
    genre: "Action ",
    category:"nollywood",
    rating: 8.9,
    year: 2023,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPP6aFsZoPdkcfjuB2ioYRvesR7iSg_UrgNyHiUESVPvX_CcYci6KQsADT1_ubuy2fGO8v"
  },
  {
    id: 18,
    title: "Your Name",
    genre: "anime",
    category:"japanese",
    rating: 9.2,
    year: 2016,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9uGf6hrJrdacDNQjKQNa1hU2EBAnDgWcvafdM7mnNNN3mPM3rfODurZlx7qDKEgvRQkKf"
  },
  {
    id: 19,
    title: "Parasite",
    category:"japanese",
    genre: "Thriller",
    rating: 9.0,
    year: 2019,
    imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTTRGm5Vxt-AKoe72ASaC0F1w58TkuIQTuYrjrzhHkAcZYXXUS9WQdAuaikkuRMX50MWN01lw"
  },
  {
    id: 20,
    title: "Avatar: The Way of Water",
    genre: "action",
    category:"japanese",
    rating: 8.4,
    year: 2022,
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTA7S2fDMhUDVcZnuxuie2xE_ayntCdkCKme3EK3ObKXFuhdaLhYYTpzUHZ45-IQzQt6T"
  }
];

export default movie;
