const About = () => {
  return (
    <div className="mx-4 md:mx-10 py-8">
      <h3 className="text-2xl md:text-3xl font-semibold text-center py-6 sm:py-4">
        Astronomy Picture of the Day
      </h3>

      <div className="flex flex-col items-center">
        <img
          src="https://api.nasa.gov/assets/img/general/apod.jpg"
          alt="APOD"
          className="w-full rounded-lg"
        />
        <div className="flex flex-col gap-4 py-4">
          <p className="text-[0.95rem] md:text-base text-gray-800 mt-4 md:mt-0">
            One of the most popular websites at NASA is the Astronomy Picture of
            the Day. In fact, this website is one of the most popular websites
            across all federal agencies. It has the popular appeal of a Justin
            Bieber video. This endpoint structures the APOD imagery and
            associated metadata so that it can be repurposed for other
            applications. In addition, if the concept_tags parameter is set to
            True, then keywords derived from the image explanation are returned.
            These keywords could be used as auto-generated hashtags for twitter
            or instagram feeds; but generally help with discoverability of
            relevant imagery.
          </p>

          <p className="text-[0.95rem] md:text-base text-gray-800 mt-4 md:mt-0">
            The full documentation for this API can be found in the{" "}
            <a
              href="https://github.com/nasa/apod-api"
              className="text-blue-500 underline"
            >
              APOD API Github repository.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
