<script setup>
const userProfileMenu = ref();

const toggleProfileMenu = (event) => {
  userProfileMenu.value.toggle(event);
};
const logout = () => {
  console.log("logged out");
};

const profileMenuItems = ref([
  {
    label: "Profile",
    icon: "pi pi-user",
    route: { to: { name: "user-profile" } },
  },
  {
    label: "Inbox",
    icon: "pi pi-envelope",
    route: { to: { name: "inbox" } },
  },
  {
    label: "Notifications",
    icon: "pi pi-bell",
    route: { to: { name: "notifications" } },
    badge: {
      value: "3",
    },
  },
  {
    label: "Task",
    icon: "pi pi-clipboard",
    route: { to: { name: "classes-tasks" } },
  },
  {
    label: "Appearance",
    icon: "pi pi-palette",
    route: { to: { name: "appearance", query: { tab: "coloring" } } },
  },
  {
    label: "Appearance 2",
    icon: "pi pi-palette",
    route: { to: { name: "appearance-2" } },
  },
  { separator: true },
]);
</script>

<template>
  <div
    class="flex cursor-pointer items-center gap-4 sm:ml-2"
    @click="toggleProfileMenu"
  >
    <OverlayBadge severity="success">
      <Avatar label="JD" style="width: 2.5rem; height: 2.5rem" />
    </OverlayBadge>

    <div class="hidden flex-col sm:flex">
      <span>John Doe</span>
      <span class="text-muted text-xs">Admin</span>
    </div>
  </div>

  <Menu
    ref="userProfileMenu"
    :model="profileMenuItems"
    popup
    append-to="#teleports"
    class="w-52"
    style="margin-top: 0.75rem"
  >
    <template #item="{ item, props }">
      <NuxtLink
        v-ripple
        class="flex items-center"
        :class="item.class"
        v-bind="{ ...props.action, ...item.route }"
        style="gap: 0.75rem"
      >
        <span :class="item.icon" />
        <span>{{ item.label }}</span>
        <Badge
          v-if="item.badge"
          :value="item.badge.value"
          :severity="item.badge.severity ?? 'danger'"
          class="ml-auto"
        />
      </NuxtLink>
    </template>
    <template #end>
      <div class="px-2 py-2">
        <GButton
          label="Logout"
          icon="pi pi-sign-out"
          severity="danger"
          tonal
          fluid
        />
      </div>
    </template>
  </Menu>
</template>
