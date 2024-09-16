import "./Agents.css"


function Agents(){
    return(<>
    
    <div className="agent-container">
        <div className="first-two-agents">


            <div className="agent-card agent-Jessica">
                <img src="/Jessica.jpeg" alt="Jessica Lee" className="agent-photo" />
                <div className="agent-info">
                    <h2>Jessica Lee</h2>
                    <p><strong>Specialty:</strong> Luxury Properties <br />
                    <strong>Location:</strong> Beverly Hills <br />
                    <strong>Years of Experience:</strong> 15+ Years <br />
                    <strong>Description:</strong> Jessica specializes in high-end homes and investment properties in Beverly Hills. Her extensive network and keen market insights ensure her clients find the perfect luxury home.<br />
                    <strong>Contact:</strong> (310) 555-1234 | jessica.lee@luxuryhomes.com</p>
                </div>
           </div>
    
            <div className="agent-card agent-Michael">
                <img src="/Micheal.jpeg" alt="Michael Carter" className="agent-photo" />
                <div className="agent-info">
                    <h2>Michael Carter</h2>
                    <p><strong>Specialty:</strong> Urban Condos and Apartments <br />
                    <strong>Location:</strong> New York City <br />
                    <strong>Years of Experience:</strong> 10 Years <br />
                    <strong>Description:</strong> Michael focuses on modern condos and apartments in New York City. With a background in urban development, he provides valuable advice on city living and investment opportunities.<br />
                    <strong>Contact:</strong> (212) 555-5678 | michael.carter@cityliving.com</p>
                </div>
            </div>
        </div>


        <div className="second-two-agents">

          
                <div className="agent-card agent-Emily">
                    <img src="/Emily.jpeg" alt="Emily Thompson" className="agent-photo2" />
                    <div className="agent-info2">
                        <h2>Emily Thompson</h2>
                        <p><strong>Specialty:</strong> Family Homes and Suburban Properties <br />
                        <strong>Location:</strong> Suburban Neighborhoods <br />
                        <strong>Years of Experience:</strong> 12 Years <br />
                        <strong>Description:</strong> Emily specializes in finding ideal family homes in suburban areas. Her knowledge of local schools, parks, and community amenities helps families find their perfect neighborhood.<br />
                        <strong>Contact:</strong> (404) 555-9876 | emily.thompson@suburbanhomes.com</p>
                    </div>
                </div>
        
                <div className="agent-card agent-David">
                        <img src="/David.jpeg" alt="David Martinez" className="agent-photo2" />
                        <div className="agent-info2">
                            <h2>David Martinez</h2>
                            <p><strong>Specialty:</strong> Beachfront Properties <br />
                            <strong>Location:</strong> Malibu <br />
                            <strong>Years of Experience:</strong> 8 Years <br />
                            <strong>Description:</strong> David focuses on beachfront properties in Malibu. With a passion for coastal living and a deep understanding of the Malibu real estate market, he helps clients find their dream beach house.<br />
                            <strong>Contact:</strong> (310) 555-6789 | david.martinez@beachfrontmalibu.com</p>
                        </div>
                    </div>
                </div>
        

    </div>
    
    </>)
}

export default Agents