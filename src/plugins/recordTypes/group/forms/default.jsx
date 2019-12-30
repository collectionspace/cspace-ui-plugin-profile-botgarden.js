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
      <Panel name="info" collapsible>
        <Field name="title" />

        <Cols>
          <Col>
            <Field name="owner" />
          </Col>

          <Col>
            <Row>
              <Field name="groupEarliestSingleDate" />
              <Field name="groupLatestDate" />
            </Row>
          </Col>
        </Cols>

        <Field name="scopeNote" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
