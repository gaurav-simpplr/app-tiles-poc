import {
  Spacing,
  Typography,
  Image as AthenaImage,
  Table,
  PageContainer,
  Cell,
  Row,
} from "@simpplr/athena-ui";
import { TextBlock, ImageBlock, Container } from "./Components";
import * as ACData from "adaptivecards-templating";
import { WORKDAY, SALESFORCE, MOODLE_COURSES } from "./Data";
import { UISchemaMoodle, UISchemaWorkday, UISchemaSalesforce } from "./Schemas";
import { parserAndRenderer, populateSchema } from "./utils";

export default function Playground() {

  // Setting up the context for the adaptive cards
  const contextMoodle = {
    $root: MOODLE_COURSES,
  };

  const contextWorkday = {
    $root: WORKDAY,
  };

  const contextSalesforce = {
    $root: SALESFORCE,
  };

  // Setting up the adaptive card templates
  const templateMoodle = new ACData.Template(UISchemaMoodle);
  const templateWorkday = new ACData.Template(UISchemaWorkday);
  const templateSalesforce = new ACData.Template(UISchemaSalesforce);


  // Expanding the adaptive card templates with the context
  const cardsMoodle = templateMoodle.expand(contextMoodle);
  const cardsWorkday = templateWorkday.expand(contextWorkday);
  const cardsSalesforce = templateSalesforce.expand(contextSalesforce);


  const populatedMoodleSchema = populateSchema(UISchemaMoodle, MOODLE_COURSES);
  console.log({populatedMoodleSchema});

  const populatedSalesforceSchema = populateSchema(UISchemaSalesforce, SALESFORCE);
  console.log({populatedSalesforceSchema});

  const poulateWorkdaySchema = populateSchema(UISchemaWorkday, WORKDAY);

  return (
    <PageContainer>
      <Spacing size={30} hasDividers>
      <Spacing size={20} hasDividers>
        <Typography>My Courses</Typography>
        {/* Using the adaptive card template */}
        {/* {parserAndRenderer(cardsMoodle)} */}

        {/* Using the custom template parser */}
        {parserAndRenderer(populatedMoodleSchema)}
      </Spacing>

      <Spacing size={20} hasDividers>
        <Typography>Workday Inbox</Typography>
        {/* Using the adaptive card template */}
        {/* {parserAndRenderer(cardsWorkday)} */}

        {/* Using the custom template parser */}
        {parserAndRenderer(poulateWorkdaySchema)}
      </Spacing>

      <Typography>Salesforce Reports</Typography>
      {/* Using the adaptive card template */}
      {/* {parserAndRenderer(cardsSalesforce)} */}

      {/* Using the custom template parser */}
      {parserAndRenderer(populatedSalesforceSchema)}
      </Spacing>
    </PageContainer>
  );
}
