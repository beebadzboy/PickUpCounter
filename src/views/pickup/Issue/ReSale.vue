<template>
  <div>
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Tabs
            <div class="card-header-actions">
              <a
                href="https://coreui.io/vue/docs/components/tabs"
                class="card-header-action"
                rel="noreferrer noopener"
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Home" active>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CTab>
              <CTab title="Profile" active>
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CTab>
              <CTab title="Disabled" disabled>
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>delopment

<script>
export default {
  name: "ReSale",
  data() {
    return {
      tabs: ["Calculator", "Shopping cart", "Charts"],
      activeTab: 1,
    };
  },
};
</script>
