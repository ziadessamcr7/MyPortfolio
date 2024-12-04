let HeightOfImg = 0
let arrOfHeight = []
const allProjects = [
  {
    title: 'Project Managment Sys',
    img: require('../img/pms.webp'),
    description:
      'Pms for admin and employee',
    websiteUrl: 'https://project-management-system-five.vercel.app/',
    githubUrl: 'https://github.com/ziadessamcr7/project-management-system',
    techStack: ['Reactjs', 'Bootstrap'],
  },
  {
    title: 'E-commerece',
    img: require('../img/home.webp'),
    description:
      '',
    websiteUrl: 'https://ziadessamcr7.github.io/e-commerce-login',
    githubUrl: 'https://github.com/ziadessamcr7/e-commerce-login',
    techStack: ['Reactjs', 'Bootstrap'],
  },

  {
    title: 'Food app for admin',
    img: require('../img/dashboard_recipes.webp'),
    description:
      '',
    websiteUrl: 'https://ziadessamcr7.github.io/food-app-admin',
    githubUrl: 'https://github.com/ziadessamcr7/food-app-admin',
    techStack: ['Reactjs', 'Css', 'Bootstrap'],
  },
  {
    title: 'Food app for user',
    img: require('../img/home_favorites.webp'),
    description:
      '',
    websiteUrl: 'https://ziadessamcr7.github.io/food-app-user',
    githubUrl: 'https://github.com/ziadessamcr7/food-app-user',
    techStack: ['Reactjs', 'Css', 'Bootstrap'],
  },
  {
    title: 'Pokemons',
    img: require('../img/pokemon-app-nextjs.webp'),
    description:
      '',
    websiteUrl: 'https://pokemon-app-nextjs-dun.vercel.app/',
    githubUrl: 'https://github.com/ziadessamcr7/pokemonApp-Nextjs',
    techStack: ['Nextjs', 'Bootstrap'],
  },
  {
    title: 'Online Shoping',
    img: require('../img/Nti-Task-6.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Nti-Task-6/',
    githubUrl: 'https://github.com/ziadessamcr7/Nti-Task-6',
    techStack: ['HTML', 'CSS'],
  },
  {
    title: 'Devfolio',
    img: require('../img/devfolio.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/DevFolio-webPage/',
    githubUrl: 'https://github.com/ziadessamcr7/DevFolio-webPage',
    techStack: ['HTML', 'CSS', 'BOOTSTRAP'],
  },
  {
    title: 'Car Rental',
    img: require('../img/Nti-Task-4.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Nti-Task-4/',
    githubUrl: 'https://github.com/ziadessamcr7/Nti-Task-4',
    techStack: ['HTML5', 'CSS3'],
  },
  {
    title: 'Construction',
    img: require('../img/Nti-Task-7.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Nti-Task-7/',
    githubUrl: 'https://github.com/ziadessamcr7/Nti-Task-7',
    techStack: ['Htmel', 'Css'],
  },
  {
    title: 'Mercedes-benz',
    img: require('../img/Nti-Task-3.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Nti-Task-3/index.html',
    githubUrl: 'https://github.com/ziadessamcr7/Nti-Task-3',
    techStack: ['HTML', 'CSS'],
  },
  {
    title: 'Business',
    img: require('../img/Nti-Task-5.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Nti-Task-5/',
    githubUrl: 'https://github.com/ziadessamcr7/Nti-Task-5',
    techStack: ['Html', 'Css'],
  },

  {
    title: 'Osaka',
    img: require('../img/Osaka-jquery.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Osaka-jquery/',
    githubUrl: 'https://github.com/ziadessamcr7/Osaka-jquery',
    techStack: ['Html', 'Css', 'javaScript', 'jQuery'],
  },

  {
    title: 'Bookmarker',
    img: require('../img/Bookmarker-CURD2.webp'),
    description: 'A web app to save your notes with CRUD functionalities.',
    websiteUrl: 'https://ziadessamcr7.github.io/Bookmarker-CURD/',
    githubUrl: 'https://github.com/ziadessamcr7/Bookmarker-CURD',
    techStack: ['Html', 'Css', 'Bootstrap', 'JavaScript'],
  },
  {
    title: 'Mealify',
    img: require('../img/Mealify-webPage.webp'),
    description: '',
    // maintenence: true,
    websiteUrl: 'https://ziadessamcr7.github.io/Mealify-webPage/',
    githubUrl: 'https://github.com/ziadessamcr7/Mealify-webPage',
    techStack: ['Html', 'Css', 'Bootstrap'],
  },

  {
    title: 'Fokir',
    img: require('../img/Fokir-webPage.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Fokir-webPage/',
    githubUrl: 'https://github.com/ziadessamcr7/Fokir-webPage',
    techStack: ['Html', 'Css', 'Bootstrap']
  },
  {
    title: 'Weather Search',
    img: require('../img/weather.webp'),
    description:
      'Is a website to find the current weather around the world, this website uses the OpenWeather API.',
    websiteUrl: 'https://ziadessamcr7.github.io/weather/',
    githubUrl: 'https://github.com/ziadessamcr7/weather',
    techStack: ['Html', 'CSS', 'API'],
  },
  {
    title: 'Daniles',
    img: require('../img/Daniles-webPage.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Daniles-webPage/',
    githubUrl: 'https://github.com/ziadessamcr7/Daniles-webPage',
    techStack: ['Html', 'Css', 'Bootstrap5'],
  },
  {
    title: 'Bakery',
    img: require('../img/Bakery-webPage.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/Bakery-webPage/',
    githubUrl: 'https://github.com/ziadessamcr7/Bakery-webPage',
    techStack: ['Html', 'Css3', 'Bootstrap 5'],
  },
  {
    title: 'Upskilling Test',
    img: require('../img/upskilling-test.webp'),
    description: '',
    websiteUrl: 'https://ziadessamcr7.github.io/upskilling-test/',
    githubUrl: 'https://github.com/ziadessamcr7/upskilling-test',
    techStack: ['Html', 'Css3'],
  },
  {
    title: 'Meals-API',
    img: require('../img/meals-APIs.webp'),
    description:
      '',
    websiteUrl: 'https://ziadessamcr7.github.io/meals-APIs/',
    githubUrl: 'https://github.com/ziadessamcr7/meals-APIs',
    techStack: ['Html', 'Css', 'javaScript'],
  },

];


// Function to get the dimensions of an image
function getImageDimensions(imgSrc, callback) {
  const img = new Image(); // Create an image object
  img.src = imgSrc; // Set the source to the image path

  img.onload = () => {
    // Wait until the image is fully loaded
    const width = img.width;
    const height = img.height;
    callback(width, height);
  };

  img.onerror = (err) => {
    console.error('Error loading image:', err);
  };
}

// Use the function
for (let i = 0; i < allProjects.length; i++) {
  // const element = allProjects[i];
  getImageDimensions(allProjects[i].img, (width, height) => {
    // console.log('Width:', width);
    // console.log('Height:', height);
    HeightOfImg = height

    arrOfHeight.push(height)

  });

}

export { arrOfHeight }

export default allProjects;
