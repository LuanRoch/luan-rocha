import Socials from "./Socials"
const footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'>
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-primary dark:text-whhite/70 text-[20px] hover:text-white dark:hover:text-primary transition-all' />
          <div className="text-muted-foreground">
            Copyright &copy; Luan Rocha Ladeira. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer