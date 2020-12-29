/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetEntriesList
// ====================================================

export interface GetEntriesList_entries_entries {
  __typename: "Entry";
  title: string | null;
  description: string | null;
}

export interface GetEntriesList_entries {
  __typename: "EntryConnection";
  entries: (GetEntriesList_entries_entries | null)[];
}

export interface GetEntriesList {
  entries: GetEntriesList_entries;
}

export interface GetEntriesListVariables {
  after?: string | null;
}
