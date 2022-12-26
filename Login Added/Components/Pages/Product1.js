import React from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "./product2";
const dummy = [
  {
    id: "m1",
    Artist: "BEYONCE",
    title: "School Life",
    price: 100,
    imageUrl:
      "https://i.pinimg.com/originals/dc/4d/c8/dc4dc8ca5c2d0302fa8c8906d82de8e7.jpg",
    imageUrl1:
      "https://4.bp.blogspot.com/-4zLFmT88eOA/TeZGZtZiiCI/AAAAAAAAArc/wqwM-0iePvg/s1600/4+Deluxe+2.png",
    imageUrl2:
      "https://3.bp.blogspot.com/-sOkqN_F0GDo/Td6H3czf1mI/AAAAAAAAWHc/fQL2k_dDpCo/s1600/BEYONCE4-BANNER-PART1.jpg",
    quantity: 1,
    detail: `Beyoncé Giselle Knowles-Carter (/biˈɒnseɪ/ (listen) bee-ON-say;[4] born September 4, 1981)[5] is an American singer, songwriter, and actress. Beyoncé's boundary-pushing artistry and vocals have made her the most influential female musician of the 21st century, according to NPR.[6] Her success has led to her becoming a cultural icon and earning her the nickname "Queen Bey".[7]

        Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as a member of the R&B girl group Destiny's Child, one of the best-selling girl groups of all time. Their hiatus saw the release of her debut album Dangerously in Love (2003), which featured the US Billboard Hot 100 number-one singles "Crazy in Love" and "Baby Boy". Following the 2006 disbanding of Destiny's Child, Beyoncé released her second solo album, B'Day, which contained singles "Irreplaceable" and "Beautiful Liar". Beyoncé also starred in multiple films such as The Pink Panther (2006), Dreamgirls (2006), Obsessed (2009), and The Lion King (2019). Her marriage to Jay-Z and her portrayal of Etta James in Cadillac Records (2008) influenced her third album, I Am... Sasha Fierce (2008), which earned a record-setting six Grammy Awards in 2010. It spawned the successful singles "If I Were a Boy", "Single Ladies", and "Halo". After professionally splitting from her manager and father Mathew Knowles in 2010, she released her musically diverse fourth album 4 in 2011.`,
  },

  {
    id: "m2",
    Artist: "ALAN JACKSON",
    title: "PRECIOUS MEMORIES",
    price: 50,
    imageUrl:
      "https://2.bp.blogspot.com/-URMahAafHsY/UVkKoYTdBNI/AAAAAAAAFnQ/sfjRE-2PqpQ/s1600/Alan+Jackson+-+Precious+Memories+II+2013+English+Christian+Album+Download.jpg",
    imageUrl1:
      "https://cps-static.rovicorp.com/3/JPG_1080/MI0003/328/MI0003328265.jpg?partner=allrovi.com",
    imageUrl2:
      "https://www.countrythangdaily.com/wp-content/uploads/2021/04/Alan-Jackson.jpg",
    quantity: 1,
    detail: `Alan Eugene Jackson (born October 17, 1958) is an American singer-songwriter. He is known for blending traditional honky-tonk and mainstream country pop sounds (for a style widely regarded as "neotraditional country"), as well as penning many of his own songs. Jackson has recorded 16 studio albums, three greatest-hits albums, two Christmas albums, and two gospel albums.

    Jackson is one of the best-selling music artists of all time, having sold over 75 million records worldwide, with 44 million sold in the United States alone.[1] He has had 66 songs appear on the Billboard Hot Country Singles & Tracks chart; of the 66 titles, and six featured singles, 38 have reached the top five and 35 have claimed the number one spot. Out of 15 titles to reach the Billboard Top Country Albums chart, nine have been certified multi-platinum. He is the recipient of two Grammy Awards, 16 CMA Awards, 17 ACM Awards and nominee of multiple other awards. He is a member of the Grand Ole Opry, and was inducted into the Georgia Music Hall of Fame in 2001. He was inducted into the Country Music Hall of Fame in 2017 by Loretta Lynn[2] and into the Nashville Songwriters Hall of Fame in 2018.[3]`,
  },

  {
    id: "m3",
    Artist: "JUSTIN BIEBER",
    title: "PURPOSE",
    price: 70,
    imageUrl:
      "https://images.genius.com/86cba61651e59d9387e0af4040937c4f.1000x1000x1.jpg",
    imageUrl1:
      "https://cdn.europosters.eu/image/750/posters/justin-bieber-purpose-tour-i30288.jpg",
    imageUrl2:
      "https://http2.mlstatic.com/caderno-personalizado-justin-bieber-purpose-10-m200-f-D_NQ_NP_916311-MLB20536810619_012016-F.jpg",
    quantity: 1,
    detail: `Purpose is the fourth studio album by Canadian singer Justin Bieber. It was released through Def Jam Recordings and School Boy Records on November 13, 2015, as the follow-up to his 2012 album Believe. The album features guest appearances from Big Sean, Travis Scott, Halsey, Skrillex, Diplo, and Ariana Grande. The deluxe version was released simultaneously on the same day. It features an extra guest appearance from Nas. Production was handled by Bieber himself, Skrillex and Diplo from Jack Ü, BloodPop, Benny Blanco, the Audibles, Soundz, Mike Dean, Ian Kirkpatrick, and Andre Harris, among others.

        In early 2015, Bieber collaborated with Skrillex and Diplo on the US top-ten single, "Where Are Ü Now", from their debut studio album as Jack Ü, Skrillex and Diplo Present Jack Ü; the song also appears on Purpose. Bieber then found what would be the record's sonic direction and worked with Skrillex on a handful of the album's songs. Purpose was described as a mix of EDM and dance-pop, with influences of tropical house in some tracks and live instruments such as acoustic guitars in some others, with the help of his friend and frequent musical collaborator, Poo Bear.`,
  },

  {
    id: "m4",
    Artist: "ED Sheeran",
    title: "DIVIDE",
    price: 100,
    imageUrl: "https://i.ytimg.com/vi/9Y3Gp6pNnsE/maxresdefault.jpg",
    imageUrl1:
      "https://www.funkidslive.com/wp-content/uploads/2017/03/ed-sheeran-divide-free.jpg",
    imageUrl2:
      "https://www.thepearlpost.com/wp-content/uploads/2017/03/edsheeran.jpg",
    quantity: 1,
    detail: ` ("Divide") is the third studio album by English singer-songwriter Ed Sheeran. It was released on 3 March 2017 through Asylum Records and Atlantic Records. "Castle on the Hill" and "Shape of You" were released as the album's lead singles on 6 January 2017. The album won the Grammy Award for Best Pop Vocal Album at the 60th Annual Grammy Awards.[1][2]

    The album was number one in the United Kingdom, selling 672,000 copies in its first week, making it the fastest-selling album by a male solo artist there and the highest opening behind Adele's 25 and Oasis' Be Here Now. "Divide" topped the charts in over 25 territories across the globe, including the United States, Canada, and Australia. In April 2018, the International Federation of the Phonographic Industry named ÷ the best-selling album worldwide of the year.[3] In October 2019 it was ranked the fifth best-selling album of the 21st century in the UK.[4]
    
    All the tracks on the album reached the top 20 of the UK Singles Chart in the week of the album's release. The dominance of its tracks on the UK chart led to calls for change on how the single chart is compiled,[5] and the Official Charts Company then introduced new rules limiting tracks eligible for entry in the top 100 to three per the main artist, as well as adjusting the streams-to-sales ratio for older songs.[6] His fourth single from ÷, "Perfect", reached number one in the US, Australia and the UK, where it became the Christmas number one of 2017.
    
    To promote the album, Sheeran embarked on a worldwide concert tour, entitled the ÷ Tour. Comprising 260 shows, it started on 16 March 2017 and ended on 26 August 2019 with the last of four homecoming gigs in Ipswich, Suffolk. By August 2019 it had become the biggest, most attended, and highest-grossing tour of all time.[7]`,
  },
];

function Product() {
  const params = useParams();

  const quote = dummy.find((quote) => quote.id === params.productId);
  if(!quote) {
    return <p>NO ALBUM FOUND!!</p>
  }

  console.log(params.productId);
  return (
    <div>
      <HighlightedQuote
        title={quote.title}
        price={quote.price}
        imageUrl={quote.imageUrl}
        imageUrl1={quote.imageUrl1}
        imageUrl2={quote.imageUrl2}
        detail={quote.detail}
      />
    </div>
  );
}
export default Product;
