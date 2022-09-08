import { Header, Footer } from '../../components/layouts';
import './PrivacyPolicy.scss';
interface Heading {
    heading: string;
}

const PrivacyPolicy = ({ heading }: Heading) => {
    return (
        <div className="privacyPolicy">
            <Header nav={true} />
            <div className="privacyPolicy__container row no-gutters">
                <div className="heading col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h1>{heading}</h1>
                    <span>Version 0.9.0 (05/08/1999).</span>
                    <p className="text-desc">
                        These Terms of Use govern your relationship with Prime regarding the
                        use of our Services served via our Domains and accessed conveniently on
                        Prime.io.
                        <br />
                        <br />
                        Please read these Terms of Use carefully before using the Service because if
                        you access or use our Service, you agree to be bound to these Terms. If you
                        disagree with any part of the terms then you may not access the Service.
                        <br />
                        <br />
                        These Terms apply to all Users. Any information submitted by you shall be
                        subject to [/legal/privacy](Prime's Privacy Policy).
                        <br />
                        <br />
                        Please reach out to us via our contact details below as soon as possible if
                        you or anyone in your company using Prime feels uninformed, finds
                        anything on our websites to be unfair, incompletely explained or surprising.
                        <br />
                        <br />
                        If you use Content originating from our Service (regardless whether it
                        contains User Generated Content and/or Your Content) elsewhere, these Terms
                        of Use remain applicable to that Content.
                        <br />
                        <br />
                        To further clarify the terms we are using, please refer to the glossary at
                        the end of this document. Please reach out to us via our contact details
                        below as soon as possible if you or anyone in your company using Prime
                        feels uninformed, finds anything on our websites to be unfair, incompletely
                        explained or surprising.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>1. Account</h4>
                    <p className="text-desc">
                        a. When you create an Account with us, you must provide us information that
                        is true, accurate, complete and current at all times. Please update your
                        information if anything changes. Failure to do so constitutes a breach of
                        the Terms, which may result in termination of your Account on our Service.
                        <br />
                        <br />
                        b. You can create a Prime Account via a third-party service. In order
                        to protect yourself, us and our other users, please make sure that you keep
                        these third-party service accounts secure.
                        <br />
                        <br />
                        c. You agree not to let any third party use your Account. You must notify us
                        immediately upon becoming aware of any breach of security or unauthorized
                        use of your Account. Our contact details are at the end of this document.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>2. Intellectual Property: Ownership</h4>
                    <p className="text-desc">
                        a. Content that you create remains Your Content. This means that by using
                        our platform no intellectual property rights are transferred from you to us.
                        <br />
                        <br />
                        b. It is your responsibility to make sure that Your Content does not
                        infringe intellectual property rights of any other party. This means that if
                        you use Content that you have not created from scratch yourself, you need to
                        make sure that you have sufficient permission to use this Content. You
                        usually need (i) a license to use another party’s content or work and (ii)
                        if you have obtained a license or an open source license applies to the
                        relevant content: You need to comply with the terms and conditions of that
                        license.
                        <br />
                        <br />
                        c. If we are held liable for infringement of third party intellectual
                        property rights as a result of your actions or omissions, you shall
                        indemnify us and hold us harmless. This means that you will have to pay all
                        our damages including legal fees.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>3. Subscriptions: Pricing and Payment</h4>
                    <p className="text-desc">
                        a. We use various payment service providers, depending on your subscription
                        plan. For new plans from the effective date of these Terms, the order
                        process is conducted by our partner and merchant of record paddle.com. This
                        means Paddle provides all customer service inquiries, handles returns and
                        provides you invoices. For legacy plans, we use our partner Stripe.com who
                        provides invoices. You pay the invoices from our partners directly to them.
                        <br />
                        <br />
                        b. With respect to payment of your subscription plan, when prompted, you
                        will have to comply with the payment terms of the relevant payment service
                        provider. If no such payment terms have been agreed upon, the following
                        conditions on pricing and payment shall apply:
                        <br />
                        <br />
                        c. At the end of each Billing Cycle, your subscription plan will
                        automatically renew under the exact same conditions unless you cancel it or
                        Prime cancels it. You may cancel your subscription renewal either
                        through your online account management page or by contacting us via the
                        details below.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>4. Acceptable Use, Abuse and Misuse: What not to do or else</h4>
                    <p className="text-desc">
                        a. You are not allowed to use our Service for the creation of Content that
                        you – or someone else permitted by you – intend to use in a way that does
                        not comply with the law and/or otherwise causes damage to anyone. This
                        means, for instance that it is not allowed to create Content and use such
                        Content for phishing.
                        <br />
                        <br />
                        b. You are also not allowed to use third party Content that you obtain from
                        our Service in any way that does not comply with the law and/or otherwise
                        causes damage to anyone. This means, for instance, that you are not allowed
                        to use Content from our Service for phishing. Obviously, you may also not
                        get Content from our Service and give it to someone else to use it in a way
                        that does not comply with the law and/or otherwise causes damage to anyone.
                        <br />
                        <br />
                        c. You are not allowed to (i) use our Service to send unsolicited or
                        unauthorized advertising, promotional materials, junk mail, spam, chain
                        letters, pyramid schemes, or any other form of duplicative or unsolicited
                        messages, whether commercial or otherwise; (ii) use our Service to harvest,
                        collect, gather or assemble information or data regarding other users,
                        including e-mail addresses, without their consent; (iii) interfere with,
                        disrupt, or create an undue burden on servers or networks connected to the
                        Service, or violate the regulations, policies or procedures of such
                        networks; (iv) attempt to gain unauthorized access to the Service or
                        third-party sites (or to other computer systems or networks connected to or
                        used together with the Service), whether through password mining or any
                        other means; (v) harass or interfere with any other user’s use and enjoyment
                        of the Service; or (vi) use software or automated agents or scripts to
                        produce multiple accounts on the Service.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>
                        5. Content and Service: “as is” and “as available”, no Express or Implied
                        Warranties
                    </h4>
                    <p className="text-desc">
                        a. Any and all Content that is available via our Service is made available
                        ‘as is’ and ‘as available’ as far as it concerns our relationship with you.
                        We do not give any warranties to you with respect to any Content created
                        through our Service, neither express nor implied.
                        <br />
                        <br />
                        b. The Service is provided without warranties of any kind, whether express
                        or implied, including, but not limited to, implied warranties of
                        merchantability, fitness for a particular purpose, non-infringement or
                        course of performance.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>6. Termination</h4>
                    <p className="text-desc">
                        We may terminate your account immediately for any reason whatsoever, but as
                        we value our users, we will normally not do so as long as you comply with
                        these Terms. Upon termination, your right to use the Service will
                        immediately cease. If you wish to terminate your account, you may simply
                        discontinue using the Service.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>7. Changes</h4>
                    <p className="text-desc">
                        a. We reserve the right, at our sole discretion, to modify or replace these
                        Terms at any time. If a revision is material we will try to provide at least
                        30 days notice prior to any new terms taking effect. What constitutes a
                        material change will be determined at our sole discretion.
                        <br />
                        <br />
                        b. By continuing to access or use our Service after the revisions to the
                        Terms become effective, you agree to be bound by the revised terms. If you
                        do not agree to the new terms, please stop using the Service.
                    </p>
                </div>
                <div className="body col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h4>8. Governing law and jurisdiction</h4>
                    <p className="text-desc">
                        These Terms of Use are governed by the laws of the Netherlands. Any dispute
                        between us regarding the Service that cannot be solved amicably, shall be
                        submitted to the competent court of Amsterdam, the Netherlands. However, if
                        you are a consumer and applicable mandatory law provides that another court
                        has jurisdiction, such mandatory law provision shall prevail over this
                        choice of jurisdiction.
                    </p>
                </div>
                <div className="final col l-o-1 l-8 m-o-2 m-8 c-o-1 c-9">
                    <h2>Previous versions of our Terms of Use</h2>
                    <span>Version 5.8.1999 (05/08/2017)</span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
