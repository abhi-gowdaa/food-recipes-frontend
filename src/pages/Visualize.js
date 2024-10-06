import React from "react";
import { Box, Card } from "@mui/material";
import "../globalStyles/styles.css";

const Visualize = () => {
  return (
    <Box
      className="data-card"
      component="section"
      sx={{
        p: 2,
        m: "auto",
        mt: "20px",
        overflow: "hidden",
        mb: "10px",
        maxWidth: "70rem",
        height: "530px",

        borderRadius: "25px",
      }}
    >
      <div style={{ display: "flex", gap: "2rem" }}>
        <Card className="vCard">
          <iframe
            title="fat"
            src="http://localhost:5601/app/visualize?security_tenant=private#/edit/d06a7ef0-834f-11ef-b196-c3e8d42f2fbb?embed=true&_g="
            height="250"
            width="300"
          ></iframe>
           <h3>Fat count</h3>
        </Card>
        <Card className="vCard">
          <iframe
            title="calories"
            src="http://localhost:5601/app/visualize?security_tenant=private#/edit/a256e730-833e-11ef-b196-c3e8d42f2fbb?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))"
            height="250"
            width="300"
          ></iframe>
          <h3>Calories count</h3>
        </Card>
        <Card className="vCard">
          <iframe
          title="Protein"
            src="http://localhost:5601/app/visualize?security_tenant=private#/edit/4a19ea60-8341-11ef-b196-c3e8d42f2fbb?embed=true&_g="
            height="250"
            width="300"
          ></iframe>
          <h3>Protein ratio</h3>
        </Card>
      </div>
      <Card style={{ marginTop: "20px", marginLeft: "150px", width: 800 }}>
        <iframe
          title="count"
          src="http://localhost:5601/app/visualize?security_tenant=private#/edit/50c115d0-8348-11ef-b196-c3e8d42f2fbb?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))"
          height="160"
          Width="800"
        ></iframe>
      </Card>
    </Box>
  );
};

export default Visualize;
