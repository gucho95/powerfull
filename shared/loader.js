export default function Loader({ t }) {
  return (
    <div className='h-screen w-screen overflow-hidden flex justify-center  items-center flex-col bg-primary-dark opacity-75'>
      <img src='/assets/battery.png' />
      <h2 className='text-2xl mt-8' children={t("loader_text")} />
    </div>
  );
}
