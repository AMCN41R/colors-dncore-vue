<template>

    <div>

        <h1>People</h1>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th class="align-center">Is Authorised</th>
                    <th class="align-center">Is Enabled</th>
                    <th class="align-center">Is Palindrome</th>
                    <th>Colors</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="person.id" v-for="person in people" @click="goToPerson(person.id)">
                    <td>
                        <!-- <a route-href="route:edit-person;params.bind:{id:person.id}">
                            {{person.fullName}}
                        </a> -->
                        {{person.fullName}}
                    </td>
                    <td class="align-center">{{person.isAuthorised | toYesNo}}</td>
                    <td class="align-center">{{person.isEnabled | toYesNo}}</td>
                    <td class="align-center">{{person.isPalindrome | toYesNo}}</td>
                    <td>{{formatColours(person)}}</td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PeopleApi, IPerson } from "../../api/people-api";

@Component
export default class PeopleList extends Vue {
  mounted() {
    this.fetchData();
  }

  private people: IPerson[] = [];

  private async fetchData(): Promise<void> {
    this.people = await PeopleApi.getPeople();
  }

  private formatColours(person: IPerson): string {
    return person.colors.map(x => x.name).join(", ");
  }

  private goToPerson(id: number) {
    alert(`Go to person: ${id}`);
  }
}
</script>

<style lang="scss" scoped>
@import "~vars";

h1 {
  font-size: 28px;
}

tr {
  cursor: pointer;
}

.align-center {
  text-align: center;
}
</style>
