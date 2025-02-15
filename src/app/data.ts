// src/components/data.ts
export type Property = {
    imageUrl: string;
    imageAlt: string;
    beds: number;
    title: string;
    formattedPrice: string;
    reviewCount: number;
    rating: number;
  };
  
  const dataList: Property[] = [
    {
      imageUrl: "https://res.cloudinary.com/dz7owxpon/image/upload/v1739600678/donny_sh_lw0dur.jpg",
      imageAlt: "Donny Suchary, S.H",
      beds: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dolor nec ex rutrum semper.Praesent ultricies purus eget lectus tristique egestas ac in lacus. Nulla eleifend lorem risus,sit amet dictum nisi gravida eget. Suspendisse odio sem, scelerisque congue luctus nec, scelerisque ultrices orci. Praesent tincidunt, risus ut commodo cursus, ligula orci tristique justo, vitae sollicitudin lacus risus dictum orci",
      formattedPrice: "$435",
      reviewCount: 34,
      rating: 4.5,
    },
    {
      imageUrl: "https://res.cloudinary.com/dz7owxpon/image/upload/v1739600678/andrean_sh_jwcy1t.jpg",
      imageAlt: "Muhammad Andrean Saepudin, S.H",
      beds: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dolor nec ex rutrum semper.Praesent ultricies purus eget lectus tristique egestas ac in lacus. Nulla eleifend lorem risus,sit amet dictum nisi gravida eget. Suspendisse odio sem, scelerisque congue luctus nec, scelerisque ultrices orci. Praesent tincidunt, risus ut commodo cursus, ligula orci tristique justo, vitae sollicitudin lacus risus dictum orci",
      formattedPrice: "$1,200",
      reviewCount: 78,
      rating: 5.0,
    },
    {
      imageUrl: "https://res.cloudinary.com/dz7owxpon/image/upload/v1739600678/irpan_sh_wlekkx.jpg",
      imageAlt: "Muhammad Irpan, S.H, M.H",
      beds: 2,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at dolor nec ex rutrum semper.Praesent ultricies purus eget lectus tristique egestas ac in lacus. Nulla eleifend lorem risus,sit amet dictum nisi gravida eget. Suspendisse odio sem, scelerisque congue luctus nec, scelerisque ultrices orci. Praesent tincidunt, risus ut commodo cursus, ligula orci tristique justo, vitae sollicitudin lacus risus dictum orci",
      formattedPrice: "$650",
      reviewCount: 53,
      rating: 4.7,
    },
  ];
  
  export default dataList;
  