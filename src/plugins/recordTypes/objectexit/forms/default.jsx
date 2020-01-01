const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="exitNumber" />
            <Field name="exitDateGroup" />
            <Field name="currentOwner" />
          </Col>

          <Col>
            <Field name="exitMethods">
              <Field name="exitMethod" />
            </Field>

            <Field name="depositor" />

            <Row>
              <Field name="exitReason" />
              <Field name="count" subpath="ns2:objectexit_naturalhistory_extension" />
            </Row>
          </Col>
        </Cols>

        <Field name="exitNote" />
        <Field name="packingNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
