const Requestquote = () => {
    return (
        <div className="requestquote">
            <h5>Free Estimation</h5>
            <h2>Request A Quote</h2>

            <div className="input-group">
                <input type="text" name="name" autoComplete="off" placeholder=" " />
                <label htmlFor="">Name</label>
            </div>

            <div className="input-group">
                <input type="email" name="name" autoComplete="off" placeholder=" " />
                <label htmlFor="">Email</label>
            </div>

            <div className="input-group">
                <input type="text" name="name" autoComplete="off" placeholder=" " />
                <label htmlFor="">Phone Number</label>
            </div>

            <div className="input-group">
            
                <select name="">
                    <option hidden>----Select Material----</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="Steel Truses">Steel Truses</option>
                    <option value="Aluminium-Zinc AZ150">Aluminium-Zinc AZ150</option>
                    <option value="Stone Coated Chip Tiles">Stone Coated Chip Tiles</option>
                    <option value="Premium Aluzinc">Premium Aluzinc</option>
                    <option value="Precoated Aluzinc">Precoated Aluzinc</option>
                    <option value="Ashpalt Shingles">Ashpalt Shingles</option>
                    <option value="PVC Gutter">PVC Gutter</option>
                    <option value="PVC Foam Facia">PVC Foam Facia</option>
                </select>
                <label htmlFor="">Material Type</label>
            </div>


            <div className="input-group">
                <select name="">
                    <option hidden>----Select Colour----</option>
                    <option value="AZ150 Woodland Grey">AZ150 Woodland Grey</option>
                    <option value="AZ150 Jasper">AZ150 Jasper</option>
                    <option value="AZ150 Headland">AZ150 Headland</option>
                    <option value="AZ150 Cottage Green">AZ150 Cottage Green</option>
                    <option value="AZ150 Wilderness">AZ150 Wilderness</option>
                    <option value="AZ150 Deep Ocean">AZ150 Deep Ocean</option>
                    <option value="AZ150 Loft">AZ150 Loft</option>
                    <option value="AZ150 Manor Red">AZ150 Manor Red</option>
                </select>
                <label htmlFor="">AZ150 Colours</label>
            </div>

            <div className="input-group">
                <select name="">
                    <option hidden>----Select Colour----</option>
                    <option value="Brick Red">Brick Red</option>
                    <option value="Patriot Red">Patriot Red</option>
                    <option value="Headland">Headland</option>
                    <option value="Wine Red">Wine Red</option>
                    <option value="Evergreen">Evergreen</option>
                    <option value="Cocoa Brown">Cocoa Brown</option>
                    <option value="Deep Ocean">Deep Ocean</option>
                    <option value="Dark Brown">Dark Brown</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="">Premium Colors</label>
            </div>

            <div className="input-group">
                <select name="">
                    <option hidden>----Select Project----</option>
                    <option value="School">School</option>
                    <option value="Estate">Estate</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Church">Church</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="">Project *</label>
            </div>

            <div className="file-group">
                <label htmlFor="fileupload">
                    Upload File
                    <input type="file" id="fileupload" />
                </label>
            </div>

            <button>
                Get a Free Quote
            </button>

        </div>
    )
}

export default Requestquote