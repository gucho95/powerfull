const Alert = ({ t }) => (
  <div className='w-full fixed z-200 bottom-0 left-0 flex justify-end slide-in-fwd-right'>
    <div
      class='bg-white border-t-4 border-primary-light rounded-b text-primary-dark px-4 py-3 shadow-block-hover w-3/12 mb-12 mr-12'
      role='alert'
    >
      <div class='flex'>
        <div class='py-1'></div>
        <div>
          <p class='font-bold'>{t("success")}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Alert;
