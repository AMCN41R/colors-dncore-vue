import Vue from "vue";
import { Component } from "vue-property-decorator";
import { PeopleApi, IPerson } from "../../../api/people-api";
import { ColorsApi } from "../../../api/colors-api";

@Component
export default class EditPerson extends Vue {
  private person: IPerson = null;
  private colors: IColorViewModel[] = [];

  mounted() {
    var id = Number(this.$route.params.id);
    this.fetchData(id);
  }

  private async fetchData(id: number): Promise<void> {
    this.person = await PeopleApi.getPerson(id);

    const allColors = await ColorsApi.getColors();
    this.colors = allColors.map(x => {
      return {
        id: x.id,
        name: x.name,
        selected: this.person.colors.some(y => y.id == x.id)
      };
    });
  }

  private setAuthorised(authorised: boolean) {
    this.person.isAuthorised = authorised;
  }

  private setEnabled(enabled: boolean) {
    this.person.isEnabled = enabled;
  }

  private setColor(color: IColorViewModel) {
    const c = this.colors.find(x => x.id == color.id);
    c.selected = !c.selected;
  }

  private async save(): Promise<void> {
    this.person.colors = this.colors.filter(x => x.selected).map(x => {
      return {
        id: x.id,
        name: x.name,
        isEnabled: true
      };
    });

    await PeopleApi.updatePerson(this.person);
    this.$router.push("/people");
  }

  private cancel() {
    this.$router.push("/people");
  }
}

interface IColorViewModel {
  id: number;
  name: string;
  selected: boolean;
}