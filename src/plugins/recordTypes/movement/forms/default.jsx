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
      <Panel name="location" collapsible>
        <Cols>
          <Col>
            <Row>
              <Field name="locationDate" />
              <Field name="reasonForMove" />
            </Row>

            <Field name="currentLocation" />
            <Field name="movementContact" />
          </Col>

          <Col>
            <Field name="movementNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="movement" collapsible collapsed>
        <Row>
          <Field name="labelRequested" subpath="ns2:movements_botgarden" />
          <Field name="labelSize" subpath="ns2:movements_botgarden" />
          <Field name="labelStandType" subpath="ns2:movements_botgarden" />
          <Field name="labelCount" subpath="ns2:movements_botgarden" />
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
