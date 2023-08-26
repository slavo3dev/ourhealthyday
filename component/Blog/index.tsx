/* eslint-disable indent */
import { FC } from "react";
import Image from "next/image";

export const BlogWelcome: FC = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-f2eee5 justify-center items-center h-full p-8">
        <section className="py-20">
          <div>
            <div>
              <div>
                <h2 className="mb-4 text-3xl font-bold font-heading text-center">
                  Welcome to our Blog!
                </h2>
                <p className="mb-8 leading-loose text-blueGray-400">
                  Here you will find articles that are published every
                  week. We hope that you will find a lot of
                  inspiration and creativity for improving your life
                  and health
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="https://png.pngtree.com/png-clipart/20220709/ourmid/pngtree-book-color-open-book-stack-books-png-image_5836804.png"
                  alt={""}
                  width={640}
                  height={320}
                ></Image>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
