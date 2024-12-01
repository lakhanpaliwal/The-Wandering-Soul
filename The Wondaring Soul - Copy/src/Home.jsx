import React, {useState, useEffect} from 'react';


// const api_key = "df2a898af363a467d95d0c4b8702612034a843c29925310c4f0df0b597947948";


const Home = ({ searchQuery }) => {

  const [places, setPlaces] = useState([]);

  const fetchPlace = async (searchQuery) => {
    setPlaces([]);
    try {
      const res = await fetch(
        `https://serpapi.com/search.json?engine=google&q=${searchQuery}+Destinations&api_key=${api_key}`
      );
      const data = await res.json();
  
      // Sort places by title in alphabetical order
      const sortedPlaces = data.popular_destinations.destinations.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
  
      setPlaces(sortedPlaces);
      console.log(sortedPlaces);
    } catch (error) {
      console.log(`Error: Unable to find ${searchQuery}`);
    }
  };
  


  useEffect(() => {
    if (searchQuery) fetchPlace(searchQuery);
  }, [searchQuery]);

  

  
  return (
    <div>
      {/* Main Content */}
      <main className="p-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to The Wandering Soul</h1>
          <p className="text-gray-600 text-lg">
          Dive into a world of travel inspiration with our blog website, where travelers share stories, tips, and guides to help you explore new destinations.
          </p>
          <div className="mt-6">
            
          </div>
        </section>
      </main>

            <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
          {places.map((place, index) => (
            <div key={index} className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={place?.thumbnail || "https://via.placeholder.com/150"}
                alt="blog"
              />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                {place.title}
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                {place.description}
              </p>
              <div className="mt-4">
                <a
                  // href={blog.link}
                  className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                  title="read more"
                >
        
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
