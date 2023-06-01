import React from 'react'
import { Link } from "react-router-dom"
import Header from "../container/Header"
import image from "../../assets/About.jpeg"

const PrivacyPolicy = () => {
    return (
        <div className=''>
            <Header title = "Privacy Policy" image = {image}>
                Your Privacy is my utmost concern
            </Header>
            <div className="section">
                <h1 className="text-3xl text-blue-600 font-bold mb-6">Privacy Policy</h1>

                <p className="mb-4">
                    This Privacy Policy describes how we collect, use, and handle your personal information when you visit and use our website. By accessing or using our website, you agree to the terms of this Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold mt-6 text-blue-600 mb-4">Information Collection and Use</h2>
                <p className="mb-4">
                    We may collect personal information from you when you fill out forms on our website, subscribe to our newsletter, or interact with our services. The information we collect may include your name, email address, phone number, and any other information you provide voluntarily.
                </p>

                <h2 className="text-2xl text-blue-600 font-bold mt-6 mb-4">Use of Personal Information</h2>
                <p className="mb-4">
                    We may use the personal information we collect for various purposes, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Sending you updates, newsletters, and marketing communications related to our services.</li>
                    <li>Responding to your inquiries and providing customer support.</li>
                    <li>Improving and personalizing our website and services.</li>
                    <li>Conducting research and analysis to better understand our audience.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6 text-blue-600 mb-4">Information Sharing and Disclosure</h2>
                <p className="mb-4">
                    We may share your personal information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>With trusted third-party service providers who assist us in operating our website and providing our services.</li>
                    <li>If required by law, to comply with legal obligations, or to protect our rights and safety or the rights and safety of others.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-600">Security</h2>
                <p className="mb-4">
                    We take reasonable measures to protect the security of your personal information. However, please be aware that no method of transmission or storage is 100% secure and we cannot guarantee the absolute security of your information.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-600">External Links</h2>
                <p className="mb-4">
                    Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these external sites and are not responsible for their privacy policies. We encourage you to review the privacy policies of any external sites you visit.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-600">Changes to This Privacy Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised version will be effective as of the "Last Updated" date specified at the top of the policy. We encourage you to review this Privacy Policy periodically for any updates or changes.
                </p>

                <h2 className="text-2xl font-bold mt-6 mb-4 text-blue-600">Contact Us</h2>
                <p className="mb-4">
                    If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li>Email: droluwole@gmail.com</li>
                    <li>Phone: 123-456-7890</li>
                </ul>

                <p className="mb-4">
                    Last Updated: 25th May 2023
                </p>

                <Link to="/" className="text-blue-500">Back to Home</Link>
            </div>
        </div>
    )
}

export default PrivacyPolicy