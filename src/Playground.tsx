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
import { parserAndRenderer } from "./utils";

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

  return (
    <PageContainer>
      <Spacing size={30} hasDividers>
      <Spacing size={20} hasDividers>
        <Typography>My Courses</Typography>
        {parserAndRenderer(cardsMoodle)}
      </Spacing>

      <Spacing size={20} hasDividers>
        <Typography>Workday Inbox</Typography>
        {parserAndRenderer(cardsWorkday)}
      </Spacing>

      <Typography>Salesforce Report</Typography>
      {parserAndRenderer(cardsSalesforce)}
      </Spacing>
    </PageContainer>
  );
}
