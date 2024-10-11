import React, { useState } from "react";

export const Settings = () => {
  
  return (
    <main className="majorcontainer">
        <div className="majortitle">
            <h3>SETTINGS</h3>
        </div>
        <div className="settingssection">  
            <div className="settings">
                <form action="">
                    <br />
                    <div className="settinginputs">
                        <label className="settingslabelname">Employee ID: </label>
                        <label>5555555</label>
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Employee Name: </label>
                        <label>444454545</label>
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Email: </label>          
                        <label>44545454</label>             
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Designation: </label>
                        <label>55454545</label>
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Phone Number: </label> 
                        <label>5445454545</label>   
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Address: </label>                    
                        <label>544454554454</label>                    
                    </div>
                    <div className="settinginputs">
                        <label className="settingslabelname">Designation: </label>                   
                        <label>ihihihihihi</label>                   
                    </div>           
                    <button type="button" className="settingsbutton">UPDATE INFORMATION</button>    
                </form>
            </div>
        </div>    
    </main> 
  );
};
