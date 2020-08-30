const PlanCardMobile = ({ t, item }) => {
  return (
    <div className={`flex flex-col  justify-center items-center bg-white  sm:m-4 xs:m-1  `}>
      <div className='w-7/12 bg-primary-dark text-center sm:text-2xl xs:text-xl rounded-b-lg sm:py-2 xs:py-0   '>
        {t(item.plan_name)}
      </div>
      <div className='flex justify-between w-full sm:p-4 xs:px-1'>
        <div className='w-3/12 flex justify-center items-center '>
          <img src={item.src} alt={item.alt} className='xs:h-24 w-auto object-contain ' />
        </div>
        <div className='w-8/12 '>
          <div>
            <p children={t(item.desc_t_key)} className='text-primary-blue sm:my-4 xs:my-1 font-bold text-left ' />
          </div>
          <div>
            <h3
              children={`${item.price} ${t("amd")}`}
              className='font-bold  text-primary-blue text-3xl   text-right pr-2 '
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanCardMobile;

{
  /* <div className='flex flex-col justify-center items-center h-200px bg-white'>
  <p children={t(item.desc_t_key)} className='text-primary-blue my-4 font-bold' />
</div>; */
}
