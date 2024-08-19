/*
  Warnings:

  - You are about to drop the `articles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_created_by_id_fk`;

-- DropForeignKey
ALTER TABLE `articles` DROP FOREIGN KEY `articles_updated_by_id_fk`;

-- DropTable
DROP TABLE `articles`;

-- CreateTable
CREATE TABLE `components_blocks_ctas` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heading` VARCHAR(255) NULL,
    `description` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_ctas_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_blocks_ctas_component_type_index`(`component_type`),
    INDEX `components_blocks_ctas_entity_fk`(`entity_id`),
    INDEX `components_blocks_ctas_field_index`(`field`),
    UNIQUE INDEX `components_blocks_ctas_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_heroes` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `text` LONGTEXT NULL,
    `heading` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_heroes_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_blocks_heroes_component_type_index`(`component_type`),
    INDEX `components_blocks_heroes_entity_fk`(`entity_id`),
    INDEX `components_blocks_heroes_field_index`(`field`),
    UNIQUE INDEX `components_blocks_heroes_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_princings` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_princings_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_blocks_princings_component_type_index`(`component_type`),
    INDEX `components_blocks_princings_entity_fk`(`entity_id`),
    INDEX `components_blocks_princings_field_index`(`field`),
    UNIQUE INDEX `components_blocks_princings_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_rows` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_blocks_rows_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_blocks_rows_component_type_index`(`component_type`),
    INDEX `components_blocks_rows_entity_fk`(`entity_id`),
    INDEX `components_blocks_rows_field_index`(`field`),
    UNIQUE INDEX `components_blocks_rows_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_articles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_articles_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_elements_articles_component_type_index`(`component_type`),
    INDEX `components_elements_articles_entity_fk`(`entity_id`),
    INDEX `components_elements_articles_field_index`(`field`),
    UNIQUE INDEX `components_elements_articles_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_button_links` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `is_external` BOOLEAN NULL,
    `type` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_cards` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heading` VARCHAR(255) NULL,
    `description` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_forms` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `heading` VARCHAR(255) NULL,
    `description` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_forms_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_elements_forms_component_type_index`(`component_type`),
    INDEX `components_elements_forms_entity_fk`(`entity_id`),
    INDEX `components_elements_forms_field_index`(`field`),
    UNIQUE INDEX `components_elements_forms_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_inputs` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `placeholder` VARCHAR(255) NULL,
    `label` VARCHAR(255) NULL,
    `input_type` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_princing_cards` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `plan_type` VARCHAR(255) NULL,
    `plan_price` VARCHAR(255) NULL,
    `is_featured` BOOLEAN NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_princing_cards_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `components_elements_princing_cards_component_type_index`(`component_type`),
    INDEX `components_elements_princing_cards_entity_fk`(`entity_id`),
    INDEX `components_elements_princing_cards_field_index`(`field`),
    UNIQUE INDEX `components_elements_princing_cards_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_elements_princing_cards_services_links` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `princing_card_id` INTEGER UNSIGNED NULL,
    `service_id` INTEGER UNSIGNED NULL,
    `service_order` DOUBLE NULL,

    INDEX `components_elements_princing_cards_services_links_fk`(`princing_card_id`),
    INDEX `components_elements_princing_cards_services_links_inv_fk`(`service_id`),
    INDEX `components_elements_princing_cards_services_links_order_fk`(`service_order`),
    UNIQUE INDEX `components_elements_princing_cards_services_links_unique`(`princing_card_id`, `service_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `components_seo_meta_data` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `meta_title` VARCHAR(255) NULL,
    `meta_description` LONGTEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `landing_pages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `description` LONGTEXT NULL,
    `slug` VARCHAR(255) NULL,
    `created_at` DATETIME(6) NULL,
    `updated_at` DATETIME(6) NULL,
    `published_at` DATETIME(6) NULL,
    `created_by_id` INTEGER UNSIGNED NULL,
    `updated_by_id` INTEGER UNSIGNED NULL,

    UNIQUE INDEX `landing_pages_slug_unique`(`slug`),
    INDEX `landing_pages_created_by_id_fk`(`created_by_id`),
    INDEX `landing_pages_updated_by_id_fk`(`updated_by_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `landing_pages_components` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `entity_id` INTEGER UNSIGNED NULL,
    `component_id` INTEGER UNSIGNED NULL,
    `component_type` VARCHAR(255) NULL,
    `field` VARCHAR(255) NULL,
    `order` DOUBLE NULL,

    INDEX `landing_pages_component_type_index`(`component_type`),
    INDEX `landing_pages_entity_fk`(`entity_id`),
    INDEX `landing_pages_field_index`(`field`),
    UNIQUE INDEX `landing_pages_unique`(`entity_id`, `component_id`, `field`, `component_type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `description` VARCHAR(255) NULL,
    `created_at` DATETIME(6) NULL,
    `updated_at` DATETIME(6) NULL,
    `created_by_id` INTEGER UNSIGNED NULL,
    `updated_by_id` INTEGER UNSIGNED NULL,

    INDEX `services_created_by_id_fk`(`created_by_id`),
    INDEX `services_updated_by_id_fk`(`updated_by_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `components_blocks_ctas_components` ADD CONSTRAINT `components_blocks_ctas_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_blocks_ctas`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_blocks_heroes_components` ADD CONSTRAINT `components_blocks_heroes_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_blocks_heroes`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_blocks_princings_components` ADD CONSTRAINT `components_blocks_princings_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_blocks_princings`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_blocks_rows_components` ADD CONSTRAINT `components_blocks_rows_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_blocks_rows`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_elements_articles_components` ADD CONSTRAINT `components_elements_articles_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_elements_articles`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_elements_forms_components` ADD CONSTRAINT `components_elements_forms_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_elements_forms`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_elements_princing_cards_components` ADD CONSTRAINT `components_elements_princing_cards_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `components_elements_princing_cards`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_elements_princing_cards_services_links` ADD CONSTRAINT `components_elements_princing_cards_services_links_fk` FOREIGN KEY (`princing_card_id`) REFERENCES `components_elements_princing_cards`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `components_elements_princing_cards_services_links` ADD CONSTRAINT `components_elements_princing_cards_services_links_inv_fk` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `landing_pages` ADD CONSTRAINT `landing_pages_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `landing_pages` ADD CONSTRAINT `landing_pages_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `landing_pages_components` ADD CONSTRAINT `landing_pages_entity_fk` FOREIGN KEY (`entity_id`) REFERENCES `landing_pages`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_created_by_id_fk` FOREIGN KEY (`created_by_id`) REFERENCES `admin_users`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `services` ADD CONSTRAINT `services_updated_by_id_fk` FOREIGN KEY (`updated_by_id`) REFERENCES `admin_users`(`id`) ON DELETE SET NULL ON UPDATE RESTRICT;
