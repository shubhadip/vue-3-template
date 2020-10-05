import { mount, shallowMount } from "@vue/test-utils";
import App from "@/components/HelloWorld.vue";

test("uses mounts", async () => {
  const wrapper = mount(App);
  expect(wrapper.html()).toContain("test");
});

test("uses shallowMount", async () => {
  const wrapper = shallowMount(App);
  expect(wrapper.html()).toContain("test");
  expect(wrapper.html()).not.toContain("Hello world");
});
