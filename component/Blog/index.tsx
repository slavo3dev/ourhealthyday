import { FC } from "react";

export const BlogWelcome: FC = () => {
  return (
    <>
      <div className="flex flex-col bg-white justify-center items-center h-full p-8">
        <section className="py-20">
          <div className="container overflow-hidden">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full lg:w-1/2 px-16">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                  <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__ animate__fadeIn animated">
                    Welcome to our Blog!
                  </h2>
                  <p className="mb-8 leading-loose text-blueGray-400 wow animate__ animate__fadeIn animated">
                    Here you will find articles that are published
                    every week. We hope that you will find a lot of
                    inspiration and creativity for improving your life
                    and health
                  </p>
                </div>
                <div>
                  <img src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-color-open-book-stack-books-png-image_5836804.png"></img>
                </div>
              </div>
              <div className="left-1/2 -ml-0.5 w-0.5 max-h-200 bg-teal-500"></div>{" "}
              {/*This empty div represents the green vertical line on the Welcome page*/}
              <div className="w-full lg:w-1/2 px-8">
                <img className="hover:animate-pulse" src="https://shcs.ucdavis.edu/sites/g/files/dgvnsk7846/files/inline-images/Wheel_0.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
