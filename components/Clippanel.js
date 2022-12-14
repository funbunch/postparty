import Link from 'next/link'
// import Image from 'next/image'
import clipPanelMob from '../public/img/blade3-mob@2x.png'
import clipPanel from '../public/img/blade3.png'
import clipImg from '../public/img/clip-img@2x.png'
import clipSlider from '../public/img/sliderimg-clip@2x.png'
import saveSlider from '../public/img/sliderimg-save@2x.png'
import shareSlider from '../public/img/sliderimg-share@2x.png'
import social from '../public/img/social-icons@2x.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export const Clippanel = () => {
    return (
      <>
        <div className="clip grid"> 
          <div className="-mt-28 z-20 self-start row-start-1 col-start-1 md:hidden">
            <img src={clipPanelMob} width={414} height={934} alt="" layout='intrinsic' />
          </div>
          <div className="flex flex-col row-start-1 col-start-1 items-center z-[50] overflow-hidden md:hidden">
            <Carousel showThumbs={false} swipeable={false} width={'414px'}> 
              <div>
              <h2 className='pb-12 pl-12 text-white text-left'>Clip</h2>
              <div className='w-[80%] mx-auto'>
                <img src={clipSlider} alt="We Know Greatness When We See It, Too" />
              </div>
              <p className='subhead text-white text-lg text-left pl-14 pb-5'>We Know Greatness<br />When We See It, Too. 
              </p>
              <p className='text-left text-white px-14'>So, when you do something amazing, we&apos;ll ooh and awe and suggest that you clip it for posterity. You can agree with just one click.
              </p>
            </div>
            <div>
              <h2 className='pb-12 pl-12 text-white text-left'>Save</h2>
              <div className="save-img">
                <img src={saveSlider} alt="Your Vault Will Grow Quickly."/>
              </div>
              <p className='subhead text-white text-lg text-left pl-14 pb-5'>Your Vault Will Grow Quickly. 
                </p>
                <p className='text-white text-left px-14'>Every video you save will be added to your personal collection.
                </p>
              </div>
              <div>
              <h2 className='pb-12 pl-12 text-white text-left'>Share</h2>
              <div className="share-img pt-16 pb-16">
                <img src={shareSlider} alt="Your Friends Gotta See this, too" />
              </div>
              <p className='subhead text-white text-lg text-left pl-14 pb-5'>Your Friends Gotta See this, Too
                </p>
                <p className='text-left text-white px-14 pb-5'>Share any moment you please through your favorite social media platform (Facebook, Twitter, Instagram, etc.)
                </p>
                <div className="social-img text-left pl-12">
                  <img src={social} alt="Social icons"/>
                </div>
            </div>
            </Carousel>
          </div>
        </div>
        <div className="relative">
          <div className="-mt-[155px] hidden md:block">
            <img src={clipPanel} width={1920} height={957} alt="" />
          </div>
          <div className=" hidden md:block content-clip absolute top-2 md:top-[36%] md:left-[11%] md:w-[34%] lg:top-[35%] lg:left-[10%] lg:w-[30%]">
            <h2 className='pb-12 md:pb-4 lg:text-[55px] lg:pb-9'>Clip</h2>
            <p className='subhead md:text-2xl md:pb-2 lg:pb-9'>We Know Greatness<br />When We See It, Too. 
            </p>
            <p>So, when you do something amazing, we&apos;ll ooh and awe and suggest that you clip it for posterity. You can agree with just one click.
            </p>
          </div>
          <div className="hidden right-col md:block absolute md:top-[31%] md:w-[34%] md:left-[52%] lg:top-[25%] xl:w-[37%]">
            <img src={clipImg} width={835} height={666} layout='intrinsic' alt="" />
          </div>  
        </div>
      </>
  )

}