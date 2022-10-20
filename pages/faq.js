import Meta from "../components/Meta"
import Link from "next/link"
import Image from 'next/image'
import logoBG from '../public/img/bg-faq@2x.jpg'
import React, { useEffect } from 'react';


const faq = () => {



  return (
    <div>
        <Meta title='FAQ' />
        <div className="legal grid">
          <div className="grid self-start row-start-1 col-start-1 ">
          <Image src={logoBG} width={1920} height={640} alt=""/>
        </div>
        <div className="overlay flex flex-col
        row-start-1 col-start-1 items-center pt-7 md:px-5 md:pt-24 z-30">
          <h1 className="text-3xl text-center md:text-[55px] md:leading-[66px] font-bold pb-7 md:pb-24">FAQ</h1>
          <div className="background bg-white px-7 pt-7 text-[11px] md:text-base md:rounded-2xl md:py-14 md:px-12 lg:px-24 md:grid md:grid-cols-12 gap-5 lg:w-[1200px]">
            <aside className="inside hidden md:block md:col-span-3">
              <p className="menu-header text-[#141414] text-2xl pb-7 font-bold">Quick Access</p>
              <ul className="lists !list-none !pl-0 !text-[#141414]">
                <li><a href="#general">General Questions</a></li>
                <li><a href="#fortnite">Fortnite Specific Questions</a></li>
                <li><a href="#rocket-league">Rocket League Specific Questions</a></li>
              </ul> 
            </aside>
          <div className="inside md:col-span-9">
            <h2 className="text-[#141414] pb-7 md:text-[55px] md:leading-[66px] md:pb-12"><a id="#general">General Questions</a></h2>
            <p className="space"><span className="font-bold md:text-base">Q: What is Postparty?</span><br />
              A: 	Postparty is everything you didn&apos;t know you needed. We are a game-clipping app that lets you record your best game play moments and share them to your friends! It&apos;s easy to use and lets you share across platforms to make all your followers jealous. </p>
            <p className="space"><span className="font-bold md:text-base">Q: How to contact us?</span><br />
              A: 	We&apos;re sorry you&apos;re having problems with the app! Please shake your phone to report a bug or report a bug through the settings feature in the app. You can also request help in settings to reach one of our team members. If you can&apos;t do any of these, please contact us here: <Link href="https://www.epicgames.com/help/en-US/"><a>https://www.epicgames.com/help/en-US/</a></Link></p>
            <p className="space"><span className="font-bold md:text-base">Q: How to download Postparty app?</span><br />
              A: Better late than never! You can use download the app from the App Store here or from the Google Play store here:<br />
              <Link href="#"><a>Apple link</a></Link><br />
              <Link href="#"><a>Google link</a></Link>  </p>
              <p className="space"><span className="font-bold md:text-base">Q: Sign in with epic account</span><br />
              A: If you have an Epic account already, you&apos;re all set to go! You&apos;ll just enter your Epic information in Postparty to connect your account. If you&apos;re using a console and didn&apos;t link it to your Epic account, please follow these steps to link your accounts: <br />
              <Link href="#"><a>Sign in</a></Link> </p>
              <p className="space"><span className="font-bold md:text-base">Q: Sign in with console</span><br />
              A: If you&apos;re playing with your console account, and you never linked it to an Epic Games account, follow these steps to link your accounts. When done, enter your Epic Games account credentials to Sign In to Postparty. </p>
              <p className="space"><span className="font-bold md:text-base">Q: What if I&apos;ve never had an Epic account?</span><br />
              A: Glad you&apos;re finally joining us! You have 3 options: you can create a new account in a web browser, create an account in-game, or through the Postparty app by clicking sign-in and scrolling down to click &lsquo;sign up.&lsquo;<br/> 
              <Link href="#"><a>Sign in</a></Link> </p>
              <p className="space"><span className="font-bold md:text-base">Q: What to do if I logged in to Postparty but I see &apos;No linked accounts&apos;?</span><br />
              A: 	Make sure to double-check your logged into the right account by comparing your Epic username in Postparty to your Epic username in the game!</p>
              <p className="space"> <span className="font-bold md:text-base">Q: What games are supported for clipping with Postparty?</span><br />
              A: 	What games are supported for clipping with Postparty?</p>
              <p className="space"><span className="font-bold md:text-base">Q: How to delete my account</span><br />
              A: 	Noooo, don&apos;t go! You can&apos;t delete your Postparty account without deleting your Epic Games account. If you want to do that, please follow the steps here:<br />
              <Link href="https://www.epicgames.com/help/en-US/epic-accounts-c74/general-support-c79/how-do-i-delete-my-epic-games-account-a3636"><a>https://www.epicgames.com/help/en-US/epic-accounts-c74/general-support-c79/how-do-i-delete-my-epic-games-account-a3636</a></Link></p>
              <p><span className="font-bold md:text-base">Q: How to make clips</span><br />
              A: 	See instructions for each supported game below:</p>
              <ul className="lists list-disc pl-10">
                <li>For all games, the baseline is to use the same Epic Account in both: game and Postparty app</li>
                <li>capture clips in-game by using default or custom key bindings</li>
                <li>when a clip is captured we notify in-game. when it&apos;s ready for preview in the app - we notify with a mobile notification: `You have new clips to preview!`</li>
                <li>clips created will show up in your library, time will vary on your internet connection</li>
                <li>clips that are currently uploading will show in a “Processing” bar at the top of your Postparty Library</li>
                <li>Unseen clips have a dot in the upper right corner.</li>
              </ul>
            
              <p><span className="font-bold md:text-base">Q: How to share clips</span><br />
              A: You can share or download your clip, we will show you a message after clips are shared successfully.
              </p>
              <ul className="lists list-disc pl-10">
                <li>iOS launches system share sheet</li>
                <li>Android launches custom share sheet</li>
                <li>Press Done to dismiss the share sheet</li>
              </ul> 
              <p><span className="font-bold md:text-base">Q: How to delete clips</span><br />
              A: Android: Long press to prompt a delete button over clip
              </p>
              <ul className="lists list-disc pl-10">
                <li>iOS: Long press will launch an extended view.</li>
                <li>clips can also be deleted while previewing or editing.</li>
                <li>Postparty will not automatically delete any clips.</li>
              </ul>     
              <p className="space"><span className="font-bold md:text-base">Q: How to trim clip</span><br />
              A: 	By default, we capture the last 30 seconds of game play. To trim a clip, open the clip review and tap &ldquo;edit,&ldquo; change the start and endpoint, and hit save. Magic.</p>
              <p className="space"><span className="font-bold md:text-base">Q: How to upgrade the app</span><br />
              A: 	The easiest way to update Postparty is to turn on auto updates in the App Store! Sometimes we&apos;ll prompt you to open the App Store to update your app if it is outdated. </p>
        
              <p className="space"><span className="font-bold md:text-base">Q: How to manage notifications</span><br />
              A: 	You mean you don&apos;t want to see your friends next trick? You can manage notifications in your device settings or turn on/off in-app notifications in the app&apos;s settings.</p>
              
              <p className="space"><span className="font-bold md:text-base">Q: How to change avatar?</span><br />
              A: 	Going for a new look? Nice! You can change your in-app avatar by going to settings and clicking &quot;change avatar&quot; in the upper right-hand corner. </p>
              <div id="#fortnite" className="fornite md:block">
              <h2 className="text-[#141414] pb-7 md:leading-[66px] md:text-[55px] md:pb-12"> Fortnite Specific Questions</h2>
              <p className="space"><span className="font-bold md:text-base">Q: How to clip in Fortnite</span><br />
              A: 	If you successfully logged in into Postparty with the same Epic Account you use to play Fortnite, you will be able to take clips right away
              <ul className="lists list-disc pl-10">
                <li>At any time in gameplay, hold the quick menu button (tiny button) on a controller to create a clip</li>
                <li>Clipping is not available outside of gameplay</li>
                <li>*include video tutorial for FN?*</li>
                <li>all modes are supported for clipping</li>
                <li>mention platform eligibility: only PlayStation for now</li>
              </ul>
            </p>
            <p className="space"><span className="font-bold md:text-base">Q: What audio sources do we record in clips?</span></p>
            <ul className="lists list-disc pl-10">
              <li>A: No voice will be recorded in clips</li>
              <li>Streamer safe audio will be enabled for clipping</li>
            </ul>
            <p><span className="font-bold md:text-base">Q: Issues with clipping in Fortnite and how to solve them</span><br />  
              A: We&quot;re sorry to hear that! If you&quot;re experiencing any issues with clipping in RL or FN, please reach out to us:</p>
              <ul className="lists list-disc pl-10 pb-10">
                <li>Player support Help site</li>
                <li>Shake to report in-app </li>
              </ul>
              </div>
              <div id="#rocket-league" className="rocket md:block">
              <h2 className="text-[#141414] pb-7 md:text-[55px] md:leading-[66px] md:pb-12">Rocket League Specific Questions?</h2>
              <p><span className="font-bold md:text-base">Q: How to clip in Rocket League</span><br />
              A: If you successfully logged in into Postparty with the same Epic Account you  use to play Rocket League, you will be able to clip right away </p>
              <ul className="lists list-disc pl-10">
                <li>you can clip with [square button] during goal replay</li>
                <li>during the match, you can clip using the [?] button</li>
                <li>*include video tutorial for RL?*</li>
                <li>you can change your default clipping buttons in-game settings → Controls  → View/Change Bindings → Capture Gameplay Clip or Capture Goal Replay Clip → set to any other than [?] button</li>
                <li>mention platform eligibility: only PlayStation and Xbox for now</li> 
              </ul>
              <p><span className="font-bold md:text-base">Q: What audio sources do we record in clips?</span></p>
                <ul className="lists list-disc pl-10">
                  <li>No voice will be recorded in clips</li>
                  <li>Streamer safe audio will be enabled for clipping</li>
                </ul>
                
              <p><span className="font-bold md:text-base">Q: Issues with clipping Rocket League and how to solve them?</span><br />
              A: We&apos;re sorry to hear that! If you&apos;re experiencing any issues with clipping in RL or FN, please reach out to us:</p>
              <ul className="lists list-disc pl-10">
                <li>player support Help site</li>
                <li>shake to report in-app</li>
              </ul>
            <p className="space">You can also check out our &quot;common issues&quot; section which might help you to identify your issue.</p>     
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  
  )
}

export default faq