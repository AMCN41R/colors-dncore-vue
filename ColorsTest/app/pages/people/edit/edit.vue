<template>

	<div>

		<div v-if="!person"><i class="fa fa-cog fa-spin fa-fw fa-2x"></i></div>

		<div v-else class="panel">

			<div class="edit-person-header">
				Update {{person.fullName}}
			</div>

			<div class="edit-item" @click="setAuthorised(!person.isAuthorised)">
				<span class="edit-item-name">Is Authorised</span>
				<div class="edit-item-check pull-right">
					<i v-if="person.isAuthorised" class="fa fa-check-square-o fa-fw"></i>
					<i v-else class="fa fa-square-o fa-fw"></i>
				</div>
			</div>

			<div class="edit-item" @click="setEnabled(!person.isEnabled)">
				<span class="edit-item-name">Is Enabled</span>
				<div class="edit-item-check pull-right">
					<i v-if="person.isEnabled" class="fa fa-check-square-o fa-fw"></i>
					<i v-else class="fa fa-square-o fa-fw"></i>
				</div>
			</div>

			<div>
				<div class="edit-person-colors">
					Colors
				</div>

				<div v-for="color in colors" :key="color.id" class="edit-item" @click="setColor(color)">
					<span class="edit-item-name">{{color.name}}</span>
					<div class="edit-item-check pull-right">
						<i v-if="color.selected" class="fa fa-check-square-o fa-fw"></i>
						<i v-else class="fa fa-square-o fa-fw"></i>
					</div>
				</div>
			</div>

			<div class="panel-footer">
				<button class="btn btn-primary" @click="save()">
					<i class="fa fa-save"></i>
					Save
				</button>
				<button class="btn btn-default" @click="cancel()">
					Cancel
				</button>
			</div>

		</div>

	</div>
	
</template>

<script src="./edit.ts" lang="ts"></script>
<style src="./edit.scss" lang="scss" scoped></style>
