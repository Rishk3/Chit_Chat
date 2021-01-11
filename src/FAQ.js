import React from "react";
import Grid from "@material-ui/core/Grid";
function FAQ() {
  return (
    <div className="faq" style={{ margin: "50px 10px" }}>
      <h2>FAQ's</h2>
      <Grid container justify="center" spacing={2}>
        <Grid item xs={12} md={5} xl={4} className="faqGrid flex-bott">
          <div className="item">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            ></img>
            <p className="title">What is The Purpose of this Project?</p>
            <ul className="ans">
              <li>
                Well We can show you The statistics of Your Data By classifying
                them To different Groups
              </li>

              <li>
                What's the most Popular emoji in the group, and how many
                messages are being sent every day.
              </li>
            </ul>
          </div>

          <div className="item">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></img>

            <p className="title">What's happening with my data?</p>
            <ul className="ans">
              <li>Your Data is being Processed into your web Browser.</li>
              <li>Dont Worry We aren't Taking Your Any of the Personal Data</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={5} xl={4} className="faqGrid flex-bott">
          <div className="item">
            <img
              className="img"
              src="https://thumbs.dreamstime.com/z/gdpr-general-data-protection-regulation-notification-background-blue-116602887.jpg"
            ></img>
            <p className="title">Don't Trust Me? Well We have got solution</p>
            <ul className="ans">
              <li>
                You must have seen For data transfer to server internet
                conncetion is needed
              </li>
              <li>
                Keep Your Data Off while Uploading Your File And after Analysing
                Result You may close the webPage if you want{" "}
              </li>
            </ul>
          </div>
          <div className="item">
            <img
              className="img"
              src="https://thumbs.dreamstime.com/z/data-privacy-protection-compliance-background-data-privacy-protection-compliance-concept-background-139690645.jpg"
            ></img>

            <p className="title">Is the data being shared with 3rd parties?</p>
            <ul className="ans">
              <li>
                No we Are not taking any of your data so we can't share any of
                your Personal chat Data{" "}
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FAQ;
