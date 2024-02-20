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

  const contextCraftJs = {
    $root: MOODLE_COURSES,
  };

  // Setting up the adaptive card templates
  const templateMoodle = new ACData.Template(UISchemaMoodle);
  const templateWorkday = new ACData.Template(UISchemaWorkday);
  const templateSalesforce = new ACData.Template(UISchemaSalesforce);


  // Expanding the adaptive card templates with the context
  const cardsMoodle = templateMoodle.expand(contextMoodle);
  const cardsWorkday = templateWorkday.expand(contextWorkday);
  const cardsSalesforce = templateSalesforce.expand(contextSalesforce);
  console.log({cardsMoodle})


  const populatedMoodleSchema = populateSchema(UISchemaMoodle, MOODLE_COURSES);
  // console.log({populatedMoodleSchema});

  const populatedSalesforceSchema = populateSchema(UISchemaSalesforce, SALESFORCE);
  // console.log({populatedSalesforceSchema});

  const poulateWorkdaySchema = populateSchema(UISchemaWorkday, WORKDAY);

  // const json = {$data: "${courses}", "ROOT":{"type":"h1","isCanvas":true,"props":{},"displayName":"div","custom":{},"hidden":false,"nodes":["ptJ537IdwI","uXg4QcqYK9"],"linkedNodes":{}},"uXg4QcqYK9":{"type":"div","isCanvas":false,"props":{"className":"container"},"displayName":"div","custom":{},"parent":"ROOT","hidden":false,"nodes":["DF_V19jYLp","4qfz1jfdpM"],"linkedNodes":{}},"DF_V19jYLp":{"type":"div","isCanvas":false,"props":{"className":"headings"},"displayName":"div","custom":{},"parent":"uXg4QcqYK9","hidden":false,"nodes":["5r0PfzX6Tr"],"linkedNodes":{}},"5r0PfzX6Tr":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"DF_V19jYLp","hidden":false,"nodes":["ienOvX4RCD","pTq7FVR-gE"],"linkedNodes":{}},"ienOvX4RCD":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"name":"paragraph","color":"brandPrimary","id":"template","children":"${title}"},"displayName":"xf","custom":{},"parent":"5r0PfzX6Tr","hidden":false,"nodes":[],"linkedNodes":{}},"pTq7FVR-gE":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"Template 2 ..."},"displayName":"xf","custom":{},"parent":"5r0PfzX6Tr","hidden":false,"nodes":[],"linkedNodes":{}},"4qfz1jfdpM":{"type":"div","isCanvas":false,"props":{"className":"textInput"},"displayName":"div","custom":{},"parent":"uXg4QcqYK9","hidden":false,"nodes":["a6QEuv82EO"],"linkedNodes":{}},"a6QEuv82EO":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"4qfz1jfdpM","hidden":false,"nodes":["LK5MLk19Qn"],"linkedNodes":{}},"LK5MLk19Qn":{"type":{"resolvedName":"TextInput"},"isCanvas":false,"props":{"text":"results[0].items[0].name"},"displayName":"TextInput","custom":{},"parent":"a6QEuv82EO","hidden":false,"nodes":[],"linkedNodes":{}},"ptJ537IdwI":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{},"displayName":"Button","custom":{},"parent":"ROOT","hidden":false,"nodes":[],"linkedNodes":{}}}

  const json = {$data: "${courses}", "ROOT":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"hidden":false,"nodes":["6aeoT76gDH"],"linkedNodes":{}},"6aeoT76gDH":{"type":"div","isCanvas":false,"props":{"className":"container"},"displayName":"div","custom":{},"parent":"ROOT","hidden":false,"nodes":["0PGY1Mxfi_","1uUxqCenOD"],"linkedNodes":{}},"0PGY1Mxfi_":{"type":"div","isCanvas":false,"props":{"className":"headings"},"displayName":"div","custom":{},"parent":"6aeoT76gDH","hidden":false,"nodes":["uyffWQjbEt"],"linkedNodes":{}},"uyffWQjbEt":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"0PGY1Mxfi_","hidden":false,"nodes":["JHfQhcfHan","IWuzzp6KjQ","MqR2-K0JqJ","SOMW2FHfaV"],"linkedNodes":{}},"JHfQhcfHan":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"${title}"},"displayName":"xf","custom":{},"parent":"uyffWQjbEt","hidden":false,"nodes":[],"linkedNodes":{}},"IWuzzp6KjQ":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"${title}"},"displayName":"xf","custom":{},"parent":"uyffWQjbEt","hidden":false,"nodes":[],"linkedNodes":{}},"MqR2-K0JqJ":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"${title}"},"displayName":"xf","custom":{},"parent":"uyffWQjbEt","hidden":false,"nodes":[],"linkedNodes":{}},"SOMW2FHfaV":{"type":{"resolvedName":"Typography"},"isCanvas":false,"props":{"children":"${title}"},"displayName":"xf","custom":{},"parent":"uyffWQjbEt","hidden":false,"nodes":[],"linkedNodes":{}},"1uUxqCenOD":{"type":"div","isCanvas":false,"props":{"className":"textInput"},"displayName":"div","custom":{},"parent":"6aeoT76gDH","hidden":false,"nodes":["ruPtKqLMqd"],"linkedNodes":{}},"ruPtKqLMqd":{"type":"div","isCanvas":true,"props":{},"displayName":"div","custom":{},"parent":"1uUxqCenOD","hidden":false,"nodes":["wYLakGz06i"],"linkedNodes":{}},"wYLakGz06i":{"type":{"resolvedName":"Button"},"isCanvas":false,"props":{},"displayName":"Button","custom":{},"parent":"ruPtKqLMqd","hidden":false,"nodes":[],"linkedNodes":{}}}

  const templateCraftJs= new ACData.Template(json);
  const cardsCraftJs = templateCraftJs.expand(contextCraftJs);

  console.log({cardsCraftJs})


  return (
    <PageContainer>
      <Spacing size={30} hasDividers>
      <Spacing size={20} hasDividers>
        <Typography>My Courses</Typography>
        {/* Using the adaptive card template */}
        {parserAndRenderer(cardsMoodle)}

        {/* Using the custom template parser */}
        {/* {parserAndRenderer(populatedMoodleSchema)} */}
      </Spacing>

      <Spacing size={20} hasDividers>
        {/* <Typography>Workday Inbox</Typography> */}
        {/* Using the adaptive card template */}
        {/* {parserAndRenderer(cardsWorkday)} */}

        {/* Using the custom template parser */}
        {/* {parserAndRenderer(poulateWorkdaySchema)} */}
      </Spacing>

      {/* <Typography>Salesforce Reports</Typography> */}
      {/* Using the adaptive card template */}
      {/* {parserAndRenderer(cardsSalesforce)} */}

      {/* Using the custom template parser */}
      {/* {parserAndRenderer(populatedSalesforceSchema)} */}
      </Spacing>
    </PageContainer>
  );
}
