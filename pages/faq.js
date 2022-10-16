import Meta from "../components/Meta"
import Image from 'next/image'
import logoBG from '../public/img/blade6.jpg'

const faq = () => {
  return (
    <div>
        <Meta title='FAQ' />
        <div className="grid">
          <div className="self-start grid row-start-1 md:col-start-1 ">
          <Image src={logoBG} width={1920} height={733}/>
        </div>
        <div className="overlay flex flex-col
        row-start-1 col-start-1 items-center md:pt-24 z-30">
          <h1 className="md:text-[55px] font-bold md:pb-24">Postparty End User License Agreement</h1>
        <div className="background bg-white rounded-2xl py-14 px-24 md:w-[1200px]">
          <p className="faqs text-black">Published: Oct 24, 2022<br /><br />

            This End User License Agreement (“Agreement”) applies to your use of the Postparty software (“Software”) and related services made available to you under this Agreement (the Software and such services, collectively, the “Services”). When we say “Epic,” “we” or “us,” we are referring to Life on Air Inc.</p>
          
          <p className="faqs text-black uppercase">PLEASE READ THIS AGREEMENT CAREFULLY BEFORE YOU USE THE SERVICES. IT CONTAINS A BINDING, INDIVIDUAL ARBITRATION AND CLASS-ACTION WAIVER PROVISION. IF YOU ACCEPT THIS AGREEMENT, YOU AND EPIC AGREE TO RESOLVE DISPUTES IN BINDING, INDIVIDUAL ARBITRATION AND GIVE UP THE RIGHT TO GO TO COURT INDIVIDUALLY OR AS PART OF A CLASS ACTION, AND EPIC AGREES TO PAY YOUR ARBITRATION COSTS FOR ALL DISPUTES OF UP TO $10,000 THAT ARE MADE IN GOOD FAITH (SEE SECTION 10). YOU HAVE A TIME-LIMITED RIGHT TO OPT OUT OF THIS WAIVER. NOTE: THIS BINDING INDIVIDUAL ARBITRATION SECTION WILL NOT APPLY TO THE EXTENT PROHIBITED BY THE LAWS OF YOUR COUNTRY OF RESIDENCE.</p>
          <p className="text-black text-[30px] mb-10">1. This Agreement Forms a Contract Between You and Us</p>
          <p className="faqs">
          a.	Binding Contract
          This Agreement is a legal document detailing your rights and obligations for using the Services. By downloading the Software or using the Services, or continuing to use the Services after we notify you of a change to this Agreement, you agree to be bound by this Agreement. If you do not or cannot agree to this Agreement, you may not use the Services. </p>
          <p className="faqs">
          b.	Updates
          We may update this Agreement. You should review this Agreement regularly to take notice of any changes. Your continued use of the Services after we update this Agreement means that you accept and agree to the changes. 
          </p>
          <p className="faqs">
          c.	Electronic Notice
          If you have provided us an email address, you consent to receive notices and communications from us about this Agreement and your use of the Services from us at that email address. You agree that these electronic notices satisfy any legal requirement that such communications be in writing. 
          </p>
          <p className="text-black text-[30px] mb-10">
          2. Your Privacy
          </p>
          <p className="faqs">
          Your privacy is important to us. Please review our Privacy Policy (https://www.epicgames.com/privacypolicy). It describes how we collect, use, and share information when you use the Services that link to this Privacy Policy. 
          </p>
          <p className="text-black text-[30px] mb-10">
          3. Your Access to the Services
          </p>
          <p className="faqs">
          a.	Eligibility<br/>
          To be eligible to access the Services, you represent and warrant that you (i) are not subject to U.S. sanctions or export restrictions and otherwise are eligible to utilize the Services; (ii) are not located or ordinarily resident in a country or region subject to comprehensive or near-comprehensive U.S. sanctions or embargo, unless your use of the Services in that country or region is authorized by U.S. law; and (iii) are not an official, employee, agent, or contractor of, or directly or indirectly acting or purporting to act for or on behalf of, a government  or political party subject to U.S. sanctions/embargo, or any other entity in a sanctioned/embargoed country or region or subject to U.S. sanctions/embargo.
          </p>
          <p className="faqs">
          If you are under 18 years of age (or the age of legal majority where you live) or otherwise require the consent of a parent or legal guardian to use the Services under applicable law, you may use the Services only under the supervision of a parent or legal guardian who also agrees to be bound by this Agreement. 
          </p>
          <p className="faqs">
          If you use the Services on behalf of another person or entity, (i) all references to “you” throughout this Agreement will include that person or entity, (ii) you represent that you are authorized to accept this Agreement on that person’s or entity’s behalf, and (iii) in the event you or the person or entity violates this Agreement, that person or entity agrees to be responsible to us.
          </p>
          <p className="faqs">
          b.	Changes to the Services and Availability<br />
          We may, for any or no reason, change or remove features of the Services, stop offering the Services entirely, or restrict access to part or all of the Services to all or certain users (including you) without notice and without liability to you. Additionally, the Services or some of their features, services, or content may be unavailable to you in certain geographical locations or on certain devices. These changes or removals may cause you setbacks within the Services and may affect your experiences.
          </p>
          <p className="text-black text-[30px] mb-10">
          4. Intellectual Property Rights
          </p>
          <p className="faqs">
          a.	Our Intellectual Property Rights<br />
          Between you and us, the Services and all related proprietary rights are owned by Epic and its licensors. Except as granted in this Agreement, Epic does not grant any license or other right to you under any intellectual or other proprietary rights, and all rights in and to the Services are reserved by us or our licensors.
          </p>
          <p className="faqs">
          b.	License<br />
          Epic grants you a personal, non-exclusive, non-transferable, non-sublicensable license to install and use the Software for your personal, non-commercial use, subject to your compliance with this Agreement. The Software is licensed, not sold, to you under this license. To use the Software, you must register for and maintain an account with Epic (“Epic Account”) and agree to the applicable Epic Terms of Service. 
          </p>
          <p className="faqs ol">
          This license does not give you any right to, and you will not do the following, with the Services:</p>
          <ol className="text-black"> 
            <li>use it commercially or for a promotional purpose, except as specifically authorized by Epic in writing or a separate agreement with Epic;</li>
            <li>use it on more than one device at a time;</li>
            <li>copy, reproduce, display, perform, or otherwise use it in a way that is not expressly authorized in this Agreement;</li>
            <li>build a product or service that would compete with the Services or assist another person in building a product or service that would compete with the Services;</li>
            <li>sell, rent, lease, license, distribute, trade, or otherwise transfer it, or offer to sell, rent, lease, license, distribute, trade, or otherwise transfer it;</li>
            <li>reverse engineer, derive source code from, modify, adapt, translate, decompile, or disassemble it or make 			derivative works based on it;</li>
            <li>use any robot, spider, site search/retrieval application or other manual or automatic device or process to 			retrieve, index or “data mine” the Services or the navigational structure or presentation of the Services;</li>
            <li>use it to infringe or violate the rights of any third party, including but not limited to any intellectual property, publicity, or privacy rights;</li>
            <li>use, access, download, or otherwise export, re-export or transfer it in violation of applicable export control, economic sanctions, and import laws and regulations, as per the terms of Section 11(a);</li>
            <li> use it in violation of any applicable law or regulation or in violation of the license terms of any game from which you use the Software to capture gameplay;</li>
            <li>use it to make or publicly display footage that: (a) misrepresents our identity, the names, features or functionality of the Services or other Epic products and services, or the legal rights or obligations that 				anyone has in regards to the Services or other Epic products and services; or (b) adversely affects our 				rights in an unfair or illegal manner; or</li>
            <li>access or use the Services for any purpose that is illegal or beyond the scope of the Services’ intended 				use (in Epic’s sole judgment).</li>
          </ol>
          <p className="faqs">
          Your license includes the right to use the Software’s functionality to record, view and export video clips of gameplay with certain games available in the Software (“Recordings”), subject to the license terms applicable to such games. Otherwise, you may not copy, modify, prepare derivative works of, distribute, publicly display, publicly perform, republish, or transmit any of the material obtained through the Services, or delete, obscure or alter any copyright, trademark, or other proprietary rights notices in or from the Services. However, if you are otherwise in compliance with this Agreement, you may also record and publicly display footage of your use of the Software (including via live stream), subject to the license terms applicable to any games whose gameplay is shown in your footage.
          </p>
          <p className="faqs text-black">
          c.	Feedback<br />
          You may communicate to us questions, comments, or other information about Epic or the Services (collectively, “Feedback”). However, please do not send your unsolicited fan content or game ideas to Epic. You understand that we may use any Feedback, including any ideas contained in Feedback, for any purpose, commercial or otherwise, without acknowledgment or compensation to you, including to develop, copy, publish, or improve the Services in our sole discretion. You understand that we may treat Feedback as nonconfidential.
          </p>
          <p className="text-black text-[30px] mb-10">
          5. Termination
          </p>
          <p className="faqs">
          a.	Suspension or Termination by Epic<br />
          Please note that we may terminate this Agreement with you or suspend access to the Services without prior notice to you if you fail to comply with any provision of this Agreement or the Epic Terms of Service.
          </p> 
          <p className="faqs">
          b.	Termination by You<br />
          You may terminate this Agreement as they apply to you by deleting all copies of the Software from all devices on which you’ve installed it.
          </p>
          <p className="faqs">
          c.	Relation to Epic Account<br />
          This Agreement will terminate automatically without notice if your Epic Account is terminated.
          </p>
          <p className="faqs">
          d.	Effect of Termination<br />
          Upon any termination of this Agreement, the license granted to you under this Agreement will automatically terminate, you may no longer exercise any of the rights granted to you by the license, and you must destroy all copies of the Software in your possession. Sections 4(a) and (c), 5(d) and 6–11 will survive any termination of this Agreement
          </p>
          <p className="text-black text-[30px] mb-10">   
          6. Disclaimers
          </p>
          <p className="faqs">Nothing in this Agreement will prejudice the statutory rights that you may have as a consumer of the Services. Some countries, states, provinces or other jurisdictions do not allow the exclusion of certain warranties or the limitation of liability as stated in this section, so the below terms may not fully apply to you. In those jurisdictions, the exclusions and limitations below apply only to the extent permitted by the laws of such jurisdictions.</p>
          <p className="faqs">
          THE SERVICES, INCLUDING ALL INFORMATION, CONTENT, MATERIALS AND SOFTWARE, ARE PROVIDED BY EPIC ON AN “AS IS” AND “AS AVAILABLE” BASIS. THE EPIC PARTIES (DEFINED BELOW) MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE SERVICES. YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. TO THE FULL EXTENT PERMISSIBLE BY LAW, THE EPIC PARTIES DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING IMPLIED OR STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE OR NONINFRINGEMENT. THE EPIC PARTIES DO NOT WARRANT THAT THE SERVICES ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS</p>
          <p className="text-black text-[30px] mb-10">    
          7. Limitation of Liability
          </p>
          <p className="faqs">TO THE FULL EXTENT PERMISSIBLE BY LAW, EPIC AND ITS AFFILIATES, LICENSORS AND SERVICE PROVIDERS (“EPIC PARTIES”), WILL NOT BE LIABLE FOR ANY LOSS OF PROFITS OR ANY INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT. FURTHER, TO THE FULL EXTENT PERMISSIBLE BY LAW, THE EPIC PARTIES’ AGGREGATE LIABILITY ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT WILL NOT EXCEED THE TOTAL AMOUNTS YOU HAVE PAID (IF ANY) TO EPIC UNDER THIS AGREEMENT DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENTS GIVING RISE TO SUCH LIABILITY. THESE LIMITATIONS AND EXCLUSIONS REGARDING DAMAGES APPLY EVEN IF ANY REMEDY FAILS TO PROVIDE ADEQUATE COMPENSATION.</p>
          <p className="text-black text-[30px] mb-10">    
          8. Indemnification
          </p>
          <p className="faqs">This section only applies to the extent allowed by the laws of your jurisdiction. If the laws of your jurisdiction do not allow you to enter into the indemnification obligation below, then you assume, to the extent permitted by the laws of your jurisdiction, all liability for all claims, demands, actions, losses, liabilities, and expenses (including attorneys’ fees, costs, and expert witnesses’ fees) that are the stated subject matter of the indemnification obligation below.</p> 
          <p className="faqs">
          You agree to indemnify, pay the defense costs of, and hold harmless the Epic Parties from and against any claims, demands, actions, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorney and expert witness fees) arising out of or in connection with (i) any claim that, if true, would constitute your breach of this Agreement or your negligence, (ii) any act or omission by you in using the Services, or (iii) Your Recordings or your Feedback. You agree to reimburse the Epic Parties on demand for any defense costs incurred by the Epic Parties and any payments made or loss suffered by the Epic Parties, whether in a court judgment or settlement, based on any matter covered by this section.</p>
          <p className="text-black text-[30px] mb-10">    
          9. Governing Law and Jurisdiction</p>
          <p className="faqs">Any dispute or claim by you arising out of or related to this Agreement shall be governed by North Carolina law, exclusive of its choice of law rules. For any disputes not subject to binding individual arbitration, you and Epic agree to submit to the exclusive jurisdiction of the Superior Court of Wake County, North Carolina, or, if federal court jurisdiction exists, the United States District Court for the Eastern District of North Carolina. You and Epic agree to waive any jurisdictional, venue, or inconvenient forum objections to such courts (without affecting either party’s rights to remove a case to federal court if permissible), as well as any right to a jury trial. The Convention on Contracts for the International Sale of Goods will not apply. Any law or regulation which provides that the language of a contract shall be construed against the drafter will not apply to this Agreement. This paragraph will be interpreted as broadly as applicable law permits.</p>
          <p className="text-black text-[30px] mb-10">    
          10. Binding Individual Arbitration; No Class Actions
          </p>
        </div>
        </div>
      </div>
    </div>
  
  )
}

export default faq