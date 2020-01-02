import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="propagation" collapsible>
        <Cols>
          <Col>
            <Field name="propNumber" />

            <Row>
              <Field name="propType" />
              <Field name="numStarted" />
            </Row>
          </Col>

          <Col>
            <Row>
              <Field name="propDate" />
              <Field name="propReason" />
            </Row>

            <Field name="propComments" />
          </Col>
        </Cols>

        <Panel name="seeds" collapsible collapsed>
          <Cols>
            <Col>
              <Field name="scarStratGroupList">
                <Field name="scarStratGroup">
                  <Field name="scarStrat" />
                  <Field name="duration" />
                  <Field name="durationUnit" />
                </Field>
              </Field>
            </Col>

            <Col>
              <Row>
                <Field name="extraSeeds" />
                <Field name="spores" />
              </Row>
            </Col>
          </Cols>
        </Panel>

        <Panel name="cuttings" collapsible collapsed>
          <Row>
            <Field name="cuttingType" />
            <Field name="hormone" />
            <Field name="concentration" />
            <Field name="wounded" />
          </Row>
        </Panel>

        <Panel name="livingPlantMaterial" collapsible collapsed>
          <Row>
            <Field name="plantType" />
            <Col />
          </Row>
        </Panel>

        <Panel name="activity" collapsible collapsed>
          <Field name="propActivityGroupList">
            <Field name="propActivityGroup">
              <Panel>
                <Row>
                  <Field name="order" />
                  <Field name="activityDate" />
                  <Field name="activityType" />
                  <Field name="propCount" />
                  <Field name="medium" />
                </Row>

                <Row>
                  <Field name="potSize" />
                  <Field name="nurseryLocation" />
                  <Field name="conditions" />
                </Row>

                <Row>
                  <Field name="chemicalApplied" />
                  <Field name="activityConcentration" />
                  <Field name="activityComments" />
                </Row>
              </Panel>
            </Field>
          </Field>
        </Panel>

        <Row>
          <Field name="germinationDate" />
          <Field name="successRate" />
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.propagation.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
