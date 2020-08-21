import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "shared/header";
import Footer from "shared/footer";
import Heading from "shared/heading";
import { withTranslation } from "i18n";

const submitForm = (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const payload = {
    firstName: form.elements.item(0).value,
    email: form.elements.item(1).value,
    message: form.elements.item(2).value,
  };
  console.log(payload);
};

const Contact = ({ t }) => {
  useEffect(() => {
    var card = document.querySelector(".card");
    card.addEventListener("mouseover", () => {
      if (!card.classList.contains("is-flipped")) {
        card.classList.toggle("is-flipped");
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Powerfull | Contact</title>
      </Head>
      <Header />
      <div className='flex flex-col items-center'>
        <div className='h-110px' />
        <div className='container py-32'>
          <div className='scene scene--card'>
            <div className='card'>
              <div className='card__face card__face--front'>
                <div className='relative w-760px h-384px m-auto side-a'>
                  <img src='/assets/contact_page/contact_background.png' className='absolute z-10 w-full h-full' />
                  <div className='absolute z-20 w-full h-full'>
                    <h2
                      className='ml-184px mt-200px text-center text-black text-3xl  w-full'
                      children={t("contact_us")}
                    />
                  </div>
                </div>
              </div>
              <div className='card__face card__face--back'>
                <div className='relative w-760px h-384px m-auto side-b'>
                  <img src='/assets/contact_page/contact_form_1.png' className='absolute z-10 w-full h-full' />
                  <div className='absolute z-20 w-full h-full'>
                    <h2
                      className='mx-auto mt-20px text-center text-black text-3xl  w-full'
                      children={t("contact_us")}
                    />
                    <form className='mt-29px' onSubmit={submitForm}>
                      <div className='flex'>
                        <label className='w-210px text-black text-center'>{t("name_surname")}</label>
                        <input
                          type='text'
                          className='w-326px h-38px px-2 text-black'
                          placeholder={t("username_ph")}
                          required
                          title='anpayman'
                        />
                      </div>

                      <div className='flex mt-13px'>
                        <label className='w-210px text-black text-center'>{t("email")}</label>
                        <input
                          type='email'
                          className='w-326px h-38px px-2 text-black'
                          placeholder={t("email_ph")}
                          required
                        />
                      </div>

                      <div className='flex mt-13px'>
                        <label className='w-210px text-black text-center'>{t("message")}</label>
                        <textarea
                          className='w-326px h-128px px-2 resize-none text-black'
                          placeholder={t("message_ph")}
                          required
                        />
                      </div>

                      <div className='flex mt-6px'>
                        <button
                          className='w-98px h-40px m-auto bg-white text-black  hover:bg-primary-light transition-all duration-500 '
                          children={t("submit")}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Contact.getInitialProps = async () => ({
  namespacesRequired: ["contact"],
});

export default withTranslation("contact")(Contact);
