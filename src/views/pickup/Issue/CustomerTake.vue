<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            <strong>Information </strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="4">
                <CInput
                  label="Shopping card / Pack no. / Member Card"
                  placeholder="enter your card number"
                />
              </CCol>
              <CCol sm="2">
                <CInput label="Order no." placeholder="enter your order no" />
              </CCol>
              <CCol sm="6">
                <CInput
                  label="Passport no."
                  placeholder="enter your passport no"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="2">
                <CInput label="Customer's name" readonly="true" />
              </CCol>
              <CCol sm="8">
                <CInput label="Recipient information detail" readonly="true" />
              </CCol>
              <CCol sm="2" style="padding-top: 5px">
                <CButton block color="primary" class="mt-4"
                  >Recipient (F8)</CButton
                >
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="12">
        <CCardHeader>
          <strong>Packing Detail </strong>
        </CCardHeader>
        <CCardBody></CCardBody>
      </CCol>
    </CRow>
    <CCardBody>
        <CDataTable
          :items="dateFilteredItems"
          :fields="fields"
          sorter
          column-filter
          hover
        >
          <template #registeredTimestamp="{ item }">
            <td>
              {{ item.registeredDate }}
            </td>
          </template>
        </CDataTable>
      </CCardBody>
    <CButtonGroup
      class="align-items-center mb-2 col-md-4 order-md-2 offset-lg-8"
      size="sm"
    >
      <CButton color="success">Save (F11)</CButton>
      <CButton color="danger">Clear (F3)</CButton>
      <CButton color="warning">Print (F7)</CButton>
    </CButtonGroup>
  </div>
</template>

<script>
const items = [
  { username: 'Samppa Nori', registered: { date: '2012/01/01', timestamp: 1325376000000 }, role: 'Member', status: 'Active'},
  { username: 'Estavan Lykos', registered: { date: '2012/02/01', timestamp: 1328054400000 }, role: 'Staff', status: 'Banned'},
  { username: 'Chetan Mohamed', registered: { date: '2012/02/01', timestamp: 1328054400000 }, role: 'Admin', status: 'Inactive'},
  { username: 'Derick Maximinus', registered: { date: '2012/03/01', timestamp: 1330560000000 }, role: 'Member', status: 'Pending'},
  { username: 'Friderik Dávid', registered: { date: '2012/01/21', timestamp: 1327104000000 }, role: 'Staff', status: 'Active'},
];

export default {
  name: "Customer Take",
  data() {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label: "col-3", input: "col-9" },
      options: ["Option 1", "Option 2", "Option 3"],
      selectOptions: [
        "Option 1",
        "Option 2",
        "Option 3",
        {
          value: "some value",
          label: "Selected option",
        },
      ],
      selectedOption: "some value",

      formCollapsed: true,
      checkboxNames: [
        "Checkboxes",
        "Inline Checkboxes",
        "Checkboxes - custom",
        "Inline Checkboxes - custom",
      ],
      radioNames: [
        "Radios",
        "Inline Radios",
        "Radios - custom",
        "Inline Radios - custom",
      ],
      items,
      startDate: 1325376000000,
      endDate: 1330560000000
    };
  },
  methods: {
    validator(val) {
      return val ? val.length >= 4 : false;
    },
  },
  computed: {
    computedItems () {
      return items.map(item => {
        return {  
          item, 
          registeredTimestamp: item.registered.timestamp, 
          registeredDate: item.registered.date 
        }
      })
    },
    dateFilteredItems() {
      return this.computedItems.filter(item => {
        const date = item.registeredTimestamp
        return date >= this.startDate && date <= this.endDate
      })
    }
  },
};
</script>
