function ContactUs() {
  return (
    <div className="bg-[#1e1f24] py-12 px-[2em] md:pb-[12em] md:pt-[6em]">
        <h1 className="text-[1.8em] uppercase font-light border-b-[0.12em] w-[10.8em] border-white pb-1 lg:text-[2.5em] text-center text-white m-auto mb-[2em]">Contact Information</h1>
        <div className="w-full md:px-5 flex justify-center">
            <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black shadow-lg">
                    <div className="bg-red-800 text-white font-semibold text-xl p-4 text-center">
                        Customer Service
                    </div>
                    <div className="p-4 text-white text-sm space-y-2">
                        <p><strong>TECHFORGE Lifetime Online Support</strong></p>
                        <p className="text-red-600">support@techforge.com</p>
                        <p><strong>Monday - Saturday</strong></p>
                        <p>6am–8pm PST Telephone Support</p>
                        <p className="text-red-600">1-877-TECHFORGE-0 (674-4460)</p>
                        <p className="text-red-600">305-971-1000 (International)</p>
                        <p className="text-red-600">1-888-852-0441 (Gov & Corporate)</p>
                        <p className="text-red-600">CustomerService@techforge.com</p>
                    </div>
                </div>

                <div className="bg-black shadow-lg">
                    <div className="bg-red-800 text-white font-semibold text-xl p-4 text-center">
                        Sales & Other
                    </div>
                    <div className="p-4 text-white text-sm space-y-2">
                        <p><strong>Business Phone</strong></p>
                        <p className="text-red-600">305-971-1000</p>
                        <p><strong>Sales Assistance by Phone</strong></p>
                        <p>Monday – Friday 9:00am – 6:00pm EST</p>
                        <p className="text-red-600">Sales@techforge.com</p>
                        <p><strong>Live Chat Sales Assistance</strong></p>
                        <p>Monday – Friday 9:00am – 8:00pm EST</p>
                        <p>Saturday & Holidays 10:00am – 1:00pm EST, 2:00pm – 5:00pm EST</p>
                        <p><strong>Marketing</strong></p>
                        <p>For marketing inquiries, send proposals to: <span className="text-red-600">Marketing@techforge.com</span></p>
                        <p><strong>Government and Corporate</strong></p>
                        <p className="text-red-600">CorsairPro@corsair.com</p>
                        <p><strong>General Inquiries</strong></p>
                        <p className="text-red-600">Info@techforge.com</p>
                    </div>
                </div>

                <div className="bg-black shadow-lg">
                    <div className="bg-red-800 text-white font-semibold text-xl p-4 text-center">
                        Corporate Offices
                    </div>
                    <div className="p-4 text-white text-sm space-y-2">
                        <p><strong>Headquarters</strong></p>
                        <p>115 N. McCarthy Blvd. Milpitas, CA 95035</p>
                        <p><strong>Florida Location</strong></p>
                        <p>12021 SW 144th Street Miami, FL 33186</p>
                        <p><strong>Business Hours</strong></p>
                        <p>Monday – Friday 9:00am – 6:00pm EST</p>
                        <p><strong>Business Phone</strong></p>
                        <p className="text-red-600">305-971-1000</p>
                        <p><strong>Business Development</strong></p>
                        <p className="text-red-600">Bizdev@techforge.com</p>
                        <p><strong>Human Resources</strong></p>
                        <p className="text-red-600">HR@techforge.com</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactUs
